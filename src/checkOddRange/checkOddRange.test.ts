import cehckOddRange from "./checkOddRange"

describe('Odd range', () => {
  test('Odd range', () => {
    expect(cehckOddRange(7)).toBe(true)
  })
  test('Odd range', () => {
    expect(cehckOddRange(101)).toBe(false)
  })
})