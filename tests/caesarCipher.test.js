const caesar = require('../src/caesarCipher');

describe('#caesarCipher', () => {
  it('should output a', () => {
    expect(caesar('a', 0)).toEqual('a');
  })
  it('should output z', () => {
    expect(caesar('z', 0)).toEqual('z');
  })
  it('should output a', () => {
    expect(caesar('z', 1)).toEqual('a');
  })
  it('should output z', () => {
    expect(caesar('a', -1)).toEqual('z');
  })
  it('should output b', () => {
    expect(caesar('z', 2)).toEqual('b');
  })
  it('should output Khoor, Zruog!', () => {
    expect(caesar('Hello, World!', 3)).toEqual('Khoor, Zruog!');
  })
  it('should output MARCUS CRASSUS!', () => {
    expect(caesar('RFWHZX HWFXXZX!', -5)).toEqual('MARCUS CRASSUS!');
  })
})