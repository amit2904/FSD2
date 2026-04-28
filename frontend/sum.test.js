// sum.test.js
import { describe, it, expect } from 'vitest'
import { sum } from './sum'

describe('sum function', () => {
  it('adds numbers correctly', () => {
    expect(sum(2, 3)).toBe(5)
  })
})