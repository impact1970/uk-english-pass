import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const fail = message => { throw new Error(message) }
const required = [
  'COMMERCIAL_APP_LICENCE.md',
  'CONTENT_LICENSING.md',
  'THIRD_PARTY_NOTICES.md',
  'THIRD_PARTY_PACKAGE_LICENSES.md',
  'docs/TRADEMARK_SEARCH_2026-11-06.md',
  'docs/provenance/REVIEW_SUMMARY.md',
  'docs/provenance/content-generation-manifest.json',
  'docs/provenance/audio-generation-manifest.json',
  'docs/provenance/human-review-log.csv',
  'public/legal/THIRD_PARTY_NOTICES.txt',
]
for (const name of required) if (!fs.existsSync(path.join(root, name))) fail(`Missing compliance file: ${name}`)

const lessons = JSON.parse(fs.readFileSync(path.join(root, 'src/data/lessons.json'), 'utf8'))
const content = JSON.parse(fs.readFileSync(path.join(root, 'docs/provenance/content-generation-manifest.json'), 'utf8'))
const audio = JSON.parse(fs.readFileSync(path.join(root, 'docs/provenance/audio-generation-manifest.json'), 'utf8'))
const humanRows = fs.readFileSync(path.join(root, 'docs/provenance/human-review-log.csv'), 'utf8').trim().split(/\r?\n/)
if (content.corpus.lessons !== lessons.length || content.corpus.questions !== lessons.flatMap(lesson => lesson.questions).length) fail('Content manifest totals do not match lesson data')
if (audio.files.length !== lessons.length) fail('Audio manifest must contain one file per lesson')
if (humanRows.length !== lessons.length + 1) fail('Human review log must contain one row per lesson plus its header')
if (!lessons.every(lesson => lesson.rights?.public_licence === 'CC BY-NC 4.0' && lesson.rights?.commercial_app_licence === 'UK English Pass Commercial App Licence 1.0')) fail('Every lesson must carry both distribution licences')
if (!lessons.every(lesson => lesson.review_status === 'ai-editorially-reviewed' && lesson.human_review_status === 'pending')) fail('Review metadata must distinguish completed AI review from pending human review')

console.log(`Compliance valid: dual licences, ${content.source_files.length} source hashes, ${audio.files.length} audio hashes and ${humanRows.length - 1} human-review ledger rows.`)
