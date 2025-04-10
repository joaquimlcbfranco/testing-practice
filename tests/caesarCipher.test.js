const caesar = require('../src/caesarCipher');

describe('#caesarCipher', () => {
  it('should output z', () => {
    expect(caesar('a', -1)).toEqual('z');
  })
})