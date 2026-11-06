import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const lessonsPath = path.join(root, 'src/data/lessons.json')
const lessons = JSON.parse(fs.readFileSync(lessonsPath, 'utf8'))
const fail = message => { throw new Error(message) }

// --current validates the existing 800-question corpus while the final 1200-question corpus is integrated.
const currentCorpus = process.argv.includes('--current')
const expected = currentCorpus
  ? { lessons: 266, questions: 800, lessonsPerLevel: 133, questionsPerLevel: 400 }
  : { lessons: 400, questions: 1200, lessonsPerLevel: 200, questionsPerLevel: 600 }
const allowedTypes = new Set([
  'single-choice', 'paraphrase', 'best-response', 'speaker-opinion',
  'inference', 'event-ordering', 'matching', 'true-false-not-given',
])
const normalize = value => String(value ?? '').normalize('NFKC').toLocaleLowerCase('en-GB').replace(/[^\p{L}\p{N}]+/gu, ' ').trim()
const duplicate = (values, label) => {
  const seen = new Set()
  for (const value of values) {
    if (seen.has(value)) fail(`Duplicate ${label}: ${value.slice(0, 100)}`)
    seen.add(value)
  }
}

if (!Array.isArray(lessons)) fail('Lesson data must be an array')
if (lessons.length !== expected.lessons) fail(`Expected ${expected.lessons} lessons, got ${lessons.length}`)
const questions = lessons.flatMap(lesson => Array.isArray(lesson.questions) ? lesson.questions : [])
if (questions.length !== expected.questions) fail(`Expected ${expected.questions} questions, got ${questions.length}`)

for (const level of ['B1', 'B2']) {
  const group = lessons.filter(lesson => lesson.level === level)
  if (group.length !== expected.lessonsPerLevel) fail(`Expected ${expected.lessonsPerLevel} ${level} lessons, got ${group.length}`)
  const levelQuestions = group.reduce((total, lesson) => total + (lesson.questions?.length ?? 0), 0)
  if (levelQuestions !== expected.questionsPerLevel) fail(`Expected ${expected.questionsPerLevel} ${level} questions, got ${levelQuestions}`)
  if (new Set(group.map(lesson => lesson.unit).filter(Boolean)).size !== 9) fail(`${level} must cover exactly 9 units`)
}
if (lessons.some(lesson => !['B1', 'B2'].includes(lesson.level))) fail('Every lesson must have level B1 or B2')

duplicate(lessons.map(lesson => lesson.lesson_id), 'lesson ID')
duplicate(questions.map(question => question.id), 'question ID')
duplicate(lessons.map(lesson => normalize(lesson.title)), 'lesson title')
duplicate(lessons.map(lesson => normalize((lesson.script ?? []).map(line => line.text).join(' '))), 'lesson script')

const fourQuestionLessons = lessons.filter(lesson => lesson.questions?.length === 4)
if (currentCorpus && fourQuestionLessons.length !== 2) fail(`Expected exactly 2 legacy four-question lessons, got ${fourQuestionLessons.length}`)
if (!currentCorpus && fourQuestionLessons.length !== 0) fail(`Expected exactly 0 four-question lessons, got ${fourQuestionLessons.length}`)

for (const lesson of lessons) {
  const label = lesson.lesson_id ?? '(missing lesson_id)'
  if (!label || !lesson.title?.trim() || !Array.isArray(lesson.script) || !lesson.script.length) fail(`Incomplete lesson identity/script: ${label}`)
  if (lesson.questions?.length !== 3 && !(currentCorpus && lesson.questions?.length === 4)) fail(`Lesson ${label} must have exactly 3 questions${currentCorpus ? ' (except the 2 legacy four-question lessons)' : ''}`)
  const localPrompts = lesson.questions.map(question => normalize(question.prompt))
  duplicate(localPrompts, `question prompt in ${label}`)

  if (!lesson.rights?.licence?.trim() || !lesson.rights?.author?.trim() || lesson.rights.original !== true) fail(`Incomplete rights metadata ${label}`)
  if (!['pending', 'editorially-reviewed'].includes(lesson.review_status)) fail(`Invalid review status ${label}`)
  if (!['pending', 'ready'].includes(lesson.audio?.status)) fail(`Invalid audio status ${label}`)
  if (lesson.audio.voice !== 'bf_isabella' || lesson.audio.engine !== 'Kokoro-82M' || !lesson.audio.file?.endsWith('.m4a')) fail(`Invalid audio metadata ${label}`)

  for (const question of lesson.questions) {
    if (!question.id || !question.prompt?.trim()) fail(`Missing ID or prompt in ${label}`)
    if (!allowedTypes.has(question.type)) fail(`Invalid question type ${question.type} in ${question.id}`)
    if (!Array.isArray(question.options) || question.options.length < 2) fail(`Question ${question.id} must have at least 2 options`)
    const optionIds = question.options.map(option => option.id)
    const optionTexts = question.options.map(option => normalize(option.text))
    if (optionIds.some(id => !id) || new Set(optionIds).size !== optionIds.length) fail(`Duplicate or missing option ID in ${question.id}`)
    if (optionTexts.some(text => !text) || new Set(optionTexts).size !== optionTexts.length) fail(`Duplicate or missing option text in ${question.id}`)
    if (optionIds.filter(id => id === question.answer).length !== 1) fail(`Answer key must reference exactly one option in ${question.id}`)
    if (!question.explanation_zh_hk?.trim() || !/[^\x00-\x7F]/.test(question.explanation_zh_hk)) fail(`Missing HK Chinese explanation ${question.id}`)
  }
}

console.log(`Content valid: ${lessons.length} lessons, ${questions.length} questions, B1/B2 counts balanced across 9 units each; unique IDs, titles, scripts and valid question metadata.`)
