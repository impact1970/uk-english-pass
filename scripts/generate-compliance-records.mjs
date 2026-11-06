import crypto from 'node:crypto'
import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const docsDir = path.join(root, 'docs', 'provenance')
const publicLegalDir = path.join(root, 'public', 'legal')
fs.mkdirSync(docsDir, { recursive: true })
fs.mkdirSync(publicLegalDir, { recursive: true })

const sha256 = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex')
const relative = file => path.relative(root, file).replaceAll('\\', '/')
const writeJson = (file, value) => fs.writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`)
const quoteCsv = value => `"${String(value ?? '').replaceAll('"', '""')}"`

const lessonsPath = path.join(root, 'src', 'data', 'lessons.json')
const lessons = JSON.parse(fs.readFileSync(lessonsPath, 'utf8'))
const sourceFiles = [
  'scripts/generate-content.mjs',
  'scripts/additional-scenarios.mjs',
  'scripts/additional-scenarios-b1-300.mjs',
  'scripts/additional-scenarios-b2-300.mjs',
  'scripts/additional-scenarios-b1-600.mjs',
  'scripts/additional-scenarios-b2-600.mjs',
  'scripts/additional-scenarios-b1-1200.mjs',
  'scripts/additional-scenarios-b2-1200.mjs',
  'scripts/additional-scenarios-b2-1200-part2.mjs',
  'scripts/validate-content.mjs',
  'scripts/generate_audio.py',
  'requirements-audio.txt',
  'src/data/lessons.json',
].map(name => path.join(root, name))

const commit = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim()
const generatedAt = new Date().toISOString()
const contentManifest = {
  schema_version: 1,
  generated_at: generatedAt,
  git_commit_at_generation: commit,
  corpus: {
    lessons: lessons.length,
    questions: lessons.reduce((total, lesson) => total + lesson.questions.length, 0),
    levels: Object.fromEntries(['B1', 'B2'].map(level => {
      const group = lessons.filter(lesson => lesson.level === level)
      return [level, { lessons: group.length, questions: group.reduce((total, lesson) => total + lesson.questions.length, 0) }]
    })),
    generation_method: 'AI-assisted original drafting with source-controlled scenario files',
    review_status: 'AI editorial review completed; independent human review pending',
  },
  source_files: sourceFiles.map(file => ({ path: relative(file), bytes: fs.statSync(file).size, sha256: sha256(file) })),
}
writeJson(path.join(docsDir, 'content-generation-manifest.json'), contentManifest)

const audioDir = path.join(root, 'public', 'audio')
const audioFiles = fs.readdirSync(audioDir).filter(name => name.endsWith('.m4a')).sort()
const audioManifest = {
  schema_version: 1,
  generated_at: generatedAt,
  generator: {
    engine: 'Kokoro-82M',
    engine_version: 'v1.0',
    voice: 'bf_isabella',
    model_licence: 'Apache-2.0',
    wrapper: 'kokoro-onnx 0.6.1',
    format: 'M4A / AAC, 24 kHz mono',
    script: 'scripts/generate_audio.py',
  },
  files: audioFiles.map(name => {
    const file = path.join(audioDir, name)
    return { lesson_id: path.basename(name, '.m4a'), path: relative(file), bytes: fs.statSync(file).size, sha256: sha256(file) }
  }),
}
writeJson(path.join(docsDir, 'audio-generation-manifest.json'), audioManifest)

const humanReviewPath = path.join(docsDir, 'human-review-log.csv')
if (!fs.existsSync(humanReviewPath)) {
  const headings = ['lesson_id', 'level', 'title', 'human_review_status', 'reviewer_name_or_id', 'reviewed_at', 'outcome', 'notes', 'correction_commit']
  const rows = lessons.map(lesson => [lesson.lesson_id, lesson.level, lesson.title, 'pending', '', '', '', '', ''])
  fs.writeFileSync(humanReviewPath, `\ufeff${[headings, ...rows].map(row => row.map(quoteCsv).join(',')).join('\n')}\n`)
}

const licenceOutput = process.platform === 'win32'
  ? execFileSync(process.env.ComSpec ?? 'cmd.exe', ['/d', '/s', '/c', 'pnpm licenses list --json'], { cwd: root, encoding: 'utf8', maxBuffer: 20 * 1024 * 1024 })
  : execFileSync('pnpm', ['licenses', 'list', '--json'], { cwd: root, encoding: 'utf8', maxBuffer: 20 * 1024 * 1024 })
const licenceReport = JSON.parse(licenceOutput)
const packages = Object.entries(licenceReport).flatMap(([licence, items]) => items.map(item => ({
  name: item.name,
  versions: item.versions,
  licence,
  homepage: item.homepage ?? '',
  installed_path: item.paths?.[0] ?? '',
}))).sort((a, b) => a.name.localeCompare(b.name))

const textGroups = new Map()
for (const item of packages) {
  let licenceText = ''
  if (item.installed_path && fs.existsSync(item.installed_path)) {
    const candidate = fs.readdirSync(item.installed_path).find(name => /^(licen[cs]e|copying|notice)(\..*)?$/i.test(name))
    if (candidate) licenceText = fs.readFileSync(path.join(item.installed_path, candidate), 'utf8').trim()
  }
  if (!licenceText) licenceText = `No bundled licence text was found by the audit. Declared package licence: ${item.licence}.`
  const key = crypto.createHash('sha256').update(licenceText).digest('hex')
  const group = textGroups.get(key) ?? { packages: [], text: licenceText }
  group.packages.push(`${item.name}@${item.versions.join(', ')}`)
  textGroups.set(key, group)
}

const packageTable = packages.map(item => `| ${item.name} | ${item.versions.join(', ')} | ${item.licence} | ${item.homepage || '—'} |`).join('\n')
const fullTexts = [...textGroups.values()].map(group => `## ${group.packages.join(', ')}\n\n\`\`\`text\n${group.text}\n\`\`\``).join('\n\n')
const packageLicences = `# Third-party package licences\n\nGenerated: ${generatedAt}\n\nThis file records the installed JavaScript dependency graph used to build and test UK English Pass. Build-only packages may not be present in the distributed application, but they are retained here for a conservative audit trail.\n\n| Package | Version | Declared licence | Homepage |\n| --- | --- | --- | --- |\n${packageTable}\n\n# Licence texts found in installed packages\n\n${fullTexts}\n`
fs.writeFileSync(path.join(root, 'THIRD_PARTY_PACKAGE_LICENSES.md'), packageLicences)

const notice = `# Third-party notices\n\nLast generated: ${generatedAt}\n\nUK English Pass original learning content is not included in this third-party list. Its public and commercial distribution terms are described in CONTENT_LICENSING.md.\n\n## Runtime and build software\n\nThe React/Vite/TypeScript dependency graph and exact installed versions are recorded in THIRD_PARTY_PACKAGE_LICENSES.md. The audit currently contains ${packages.length} packages across these declared licence families: ${Object.keys(licenceReport).sort().join(', ')}.\n\n## Kokoro-82M and lesson audio\n\nPre-generated lesson audio uses Kokoro-82M v1.0 with the bf_isabella British English preset. The model repository declares Apache License 2.0. Audio was generated locally; the application does not distribute the model weights and does not call a cloud speech API.\n\n- Model: https://huggingface.co/hexgrad/Kokoro-82M\n- Model licence: https://www.apache.org/licenses/LICENSE-2.0\n- Inference wrapper: https://github.com/thewh1teagle/kokoro-onnx (MIT)\n\nThe generation-only Python environment is pinned in requirements-audio.txt: kokoro-onnx 0.6.1, soundfile 0.14.0, imageio-ffmpeg 0.8.1 and numpy 2.5.4. These tools are not bundled in the web application. FFmpeg was used only as a build tool and is not redistributed.\n\n## Device SpeechSynthesis fallback\n\nFallback speech is supplied at runtime by the user's operating system or browser. UK English Pass does not bundle, copy or redistribute those system voice files.\n\n## Names and marks\n\nKokoro, React, Vite, TypeScript and other names belong to their respective owners. Their inclusion does not imply endorsement. bf_isabella is used only as the upstream synthetic preset identifier and is not presented as a person, performer or endorser.\n`
fs.writeFileSync(path.join(root, 'THIRD_PARTY_NOTICES.md'), notice)
fs.writeFileSync(path.join(publicLegalDir, 'THIRD_PARTY_NOTICES.txt'), notice)

console.log(`Compliance records generated: ${lessons.length} lessons, ${audioFiles.length} audio files, ${packages.length} JavaScript packages.`)
