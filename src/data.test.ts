import { describe, expect, it } from 'vitest'
import data from './data/lessons.json'

const allowedTypes = new Set([
  'single-choice', 'paraphrase', 'best-response', 'speaker-opinion',
  'inference', 'event-ordering', 'matching', 'true-false-not-given',
])
const normalize = (value: string) => value.normalize('NFKC').toLocaleLowerCase('en-GB').replace(/[^\p{L}\p{N}]+/gu, ' ').trim()
const unique = (values: string[]) => new Set(values).size === values.length

describe('lesson corpus', () => {
  it('contains exactly 266 scripts and 800 questions', () => {
    expect(data).toHaveLength(266)
    expect(data.flatMap(lesson => lesson.questions)).toHaveLength(800)
  })

  it('has an even B1/B2 split across nine units each', () => {
    for (const level of ['B1', 'B2']) {
      const group = data.filter(lesson => lesson.level === level)
      expect(group).toHaveLength(133)
      expect(group.flatMap(lesson => lesson.questions)).toHaveLength(400)
      expect(new Set(group.map(lesson => lesson.unit)).size).toBe(9)
    }
  })

  it('keeps IDs, titles, scripts, and lesson-local prompts unique', () => {
    const questions = data.flatMap(lesson => lesson.questions)
    expect(unique(data.map(lesson => lesson.lesson_id))).toBe(true)
    expect(unique(questions.map(question => question.id))).toBe(true)
    expect(unique(data.map(lesson => normalize(lesson.title)))).toBe(true)
    expect(unique(data.map(lesson => normalize(lesson.script.map(line => line.text).join(' '))))).toBe(true)
    for (const lesson of data) expect(unique(lesson.questions.map(question => normalize(question.prompt)))).toBe(true)
  })

  it('uses three questions per new lesson and preserves two four-question legacy lessons', () => {
    expect(data.filter(lesson => lesson.questions.length === 4)).toHaveLength(2)
    for (const lesson of data) expect([3, 4]).toContain(lesson.questions.length)
  })

  it('has valid answer references, unique options, explanations, and question types', () => {
    for (const question of data.flatMap(lesson => lesson.questions)) {
      expect(allowedTypes.has(question.type)).toBe(true)
      expect(question.options.length).toBeGreaterThanOrEqual(2)
      expect(unique(question.options.map(option => option.id))).toBe(true)
      expect(unique(question.options.map(option => normalize(option.text)))).toBe(true)
      expect(question.options.filter(option => option.id === question.answer)).toHaveLength(1)
      expect(question.explanation_zh_hk).toMatch(/[^\x00-\x7F]/)
    }
  })

  it('includes valid rights, review, and audio metadata', () => {
    for (const lesson of data) {
      expect(lesson.rights.licence).toBeTruthy()
      expect(lesson.rights.author).toBeTruthy()
      expect(lesson.rights.original).toBe(true)
      expect(['pending', 'editorially-reviewed']).toContain(lesson.review_status)
      expect(['pending', 'ready']).toContain(lesson.audio.status)
      expect(lesson.audio.voice).toBe('bf_isabella')
      expect(lesson.audio.engine).toBe('Kokoro-82M')
      expect(lesson.audio.file).toMatch(/\.m4a$/)
    }
  })
})
