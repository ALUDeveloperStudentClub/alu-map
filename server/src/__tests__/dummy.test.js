describe('dummy test to map array', () => {
  it("get array of id from array of object", () => {
    const input = [{
      id: 1,
      name: 'A'
    }, {
      id: 2,
      name: 'B'
    }]
    const expectedOutput = [1, 2]
    const output = input.map(({ id }) => id)

    expect(expectedOutput).toEqual(output)
  })
})
