import { describe, expect, it } from 'vitest'
import data from './data/lessons.json'

describe('lesson corpus', () => {
  it('contains exactly 66 scripts and 200 questions', () => {
    expect(data).toHaveLength(66)
    expect(data.flatMap(x => x.questions)).toHaveLength(200)
  })
  it('has an even B1/B2 split across nine units each', () => {
    for (const level of ['B1','B2']) {
      const group = data.filter(x => x.level === level)
      expect(group).toHaveLength(33)
      expect(group.flatMap(x => x.questions)).toHaveLength(100)
      expect(new Set(group.map(x => x.unit)).size).toBe(9)
    }
  })
  it('keeps each listening lesson to three or four questions', () => {
    expect(data.filter(x => x.questions.length === 4)).toHaveLength(2)
    for (const lesson of data) expect([3, 4]).toContain(lesson.questions.length)
  })
  it('keys every answer to one available option', () => {
    for (const q of data.flatMap(x => x.questions)) expect(q.options.map(o => o.id)).toContain(q.answer)
  })
})
