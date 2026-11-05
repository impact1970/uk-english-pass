import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const lessons = JSON.parse(fs.readFileSync(path.join(root, 'src/data/lessons.json'), 'utf8'))
const ready = lessons.filter(lesson => lesson.audio.status === 'ready')
const pending = lessons.filter(lesson => lesson.audio.status === 'pending')
const declared = ready.map(lesson => lesson.audio.file)
const fail = message => { throw new Error(message) }

if (ready.length + pending.length !== lessons.length) fail('Every lesson must have audio status ready or pending')
for (const lesson of lessons) {
  if (lesson.audio.voice !== 'bf_isabella' || lesson.audio.engine !== 'Kokoro-82M' || lesson.audio.format !== 'm4a') {
    fail(`Invalid audio metadata: ${lesson.lesson_id}`)
  }
  if (!lesson.audio.file?.startsWith('audio/') || !lesson.audio.file.endsWith('.m4a')) {
    fail(`Invalid audio file path: ${lesson.lesson_id}`)
  }
}
if (new Set(declared).size !== declared.length) fail('Ready lessons must declare unique audio files')
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
if (actual.length !== ready.length) fail(`Expected ${ready.length} ready M4A files, found ${actual.length}`)
const bytes = actual.reduce((sum, name) => sum + fs.statSync(path.join(directory, name)).size, 0)
console.log(`Audio valid: ${ready.length} unique Kokoro M4A files, ${pending.length} pending (${(bytes / 1024 / 1024).toFixed(2)} MiB).`)
