import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const lessons = JSON.parse(fs.readFileSync(path.join(root, 'src/data/lessons.json'), 'utf8'))
const declared = lessons.map(lesson => lesson.audio.file)
const fail = message => { throw new Error(message) }

if (declared.length !== 40 || new Set(declared).size !== 40) fail('Expected 40 unique declared audio files')
for (const relative of declared) {
  const file = path.join(root, 'public', relative)
  if (!fs.existsSync(file)) fail(`Missing audio file: ${relative}`)
  const stat = fs.statSync(file)
  if (stat.size < 50_000) fail(`Audio file is unexpectedly small: ${relative} (${stat.size} bytes)`)
  const header = fs.readFileSync(file).subarray(4, 12).toString('ascii')
  if (!header.startsWith('ftyp')) fail(`Invalid M4A/MP4 signature: ${relative}`)
}

const directory = path.join(root, 'public', 'audio')
const actual = fs.readdirSync(directory).filter(name => name.endsWith('.m4a'))
if (actual.length !== 40) fail(`Expected 40 M4A files, found ${actual.length}`)
const bytes = actual.reduce((sum, name) => sum + fs.statSync(path.join(directory, name)).size, 0)
console.log(`Audio valid: 40 unique Kokoro M4A files (${(bytes / 1024 / 1024).toFixed(2)} MiB).`)
