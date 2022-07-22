import getImages from "./getImages"

describe('Get images', () => {
  test('Get data', async () => {
    const data = await getImages(1)
    expect(data).toEqual([{"author": "Alejandro Escamilla", "url": "https://unsplash.com/photos/yC-Yzbqy7PY"}])
  })
})