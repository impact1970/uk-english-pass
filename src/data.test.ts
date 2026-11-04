import { describe, expect, it } from 'vitest'
import data from './data/lessons.json'

describe('lesson corpus', () => {
  it('contains exactly 40 scripts and 120 questions', () => {
    expect(data).toHaveLength(40)
    expect(data.flatMap(x => x.questions)).toHaveLength(120)
  })
  it('has an even B1/B2 split across nine units each', () => {
    for (const level of ['B1','B2']) {
      const group = data.filter(x => x.level === level)
      expect(group).toHaveLength(20)
      expect(new Set(group.map(x => x.unit)).size).toBe(9)
    }
  })
  it('keys every answer to one available option', () => {
    for (const q of data.flatMap(x => x.questions)) expect(q.options.map(o => o.id)).toContain(q.answer)
  })
})
