import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const lessons = JSON.parse(fs.readFileSync(path.join(root,'src/data/lessons.json'),'utf8'))
const fail = m => { throw new Error(m) }
if (lessons.length !== 66) fail(`Expected 66 lessons, got ${lessons.length}`)
if (lessons.filter(x=>x.level==='B1').length !== 33 || lessons.filter(x=>x.level==='B2').length !== 33) fail('Expected 33 lessons at each level')
const qs = lessons.flatMap(l=>l.questions)
if (qs.length !== 200) fail(`Expected 200 questions, got ${qs.length}`)
for (const level of ['B1','B2']) if (lessons.filter(x=>x.level===level).reduce((n,l)=>n+l.questions.length,0)!==100) fail(`Expected 100 questions at ${level}`)
for (const level of ['B1','B2']) if (new Set(lessons.filter(x=>x.level===level).map(x=>x.unit)).size !== 9) fail(`${level} must cover 9 units`)
for (const [label, ids] of [['lesson',lessons.map(x=>x.lesson_id)],['question',qs.map(x=>x.id)]]) if (new Set(ids).size !== ids.length) fail(`Duplicate ${label} ID`)
for (const l of lessons) {
  if (!l.script?.length || l.questions.length<3 || l.questions.length>4 || !l.rights?.licence || !['pending','editorially-reviewed'].includes(l.review_status) || !['pending','ready'].includes(l.audio?.status)) fail(`Incomplete lesson ${l.lesson_id}`)
  if (l.audio.voice!=='bf_isabella' || l.audio.engine!=='Kokoro-82M' || !l.audio.file?.endsWith('.m4a')) fail(`Invalid audio metadata ${l.lesson_id}`)
  for (const q of l.questions) {
    if (!q.options.some(o=>o.id===q.answer)) fail(`Invalid answer key ${q.id}`)
    if (!q.explanation_zh_hk || !/[^\x00-\x7F]/.test(q.explanation_zh_hk)) fail(`Missing zh-HK explanation ${q.id}`)
  }
}
console.log('Content valid: 66 lessons, 200 questions, 18 level-specific units and unique IDs with valid answer references.')
