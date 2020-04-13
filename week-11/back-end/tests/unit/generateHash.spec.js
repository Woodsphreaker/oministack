const generateHash = require('../../src/utils/generateHash')

describe('Generate Unique ID', () => {
  it('Show generate and unique id', () => {
    const id = generateHash()
    expect(id).toHaveLength(8)
  })
})
