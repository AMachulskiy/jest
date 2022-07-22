import randomHexColor from "./randomHexColor"

describe('Get hex color', () => {
  test('Get color', () => {
    expect(randomHexColor(7)).toBe("Negative")
    expect(randomHexColor(8)).not.toBe("Negative")

    const mathFloor = jest.spyOn(Math, 'floor')
    randomHexColor(8)
    expect(mathFloor).toBeCalledTimes(6)

    const mathRandom = jest.spyOn(Math, 'random')
    randomHexColor(16)
    expect(mathRandom).toBeCalledTimes(6)

    const reg = new RegExp('^#[a-z0-9]{6}$')
    expect(randomHexColor(4)).toMatch(reg)
  })
})