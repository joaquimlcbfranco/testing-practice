const calculator = require('../src/calculator');

describe('#calculator', () => {
  it('should add and output 3', () => {
    expect(calculator.add(1, 2)).toEqual(3);
  })
  it('should add and output 5', () => {
    expect(calculator.add(2, 2)).toEqual(4);
  })
  it('should warn user to input numbers', () => {
    expect(calculator.add(2, 'j')).toBe('Please provide a valid number');
  })

  it('should subtract and output 6', () => {
    expect(calculator.subtract(9, 3)).toEqual(6);
  })
  it('should subtract and output 20', () => {
    expect(calculator.subtract(30, 10)).toEqual(20);
  })
  it('should warn user to input numbers', () => {
    expect(calculator.subtract(2, 'b')).toBe('Please provide a valid number');
  })

  it('should divide and output 2', () => {
    expect(calculator.divide(6, 3)).toEqual(2);
  })
  it('should warn user to input numbers', () => {
    expect(calculator.divide(2, 'b')).toBe('Please provide a valid number');
  })
  it('should warn user that it can\'t divide by 0', () => {
    expect(calculator.divide(2, 0)).toBe('Can\'t divide by 0');
  })

  it('should multiply and output 120', () => {
    expect(calculator.multiply(20, 6)).toEqual(120);
  })
  it('should multiply and output 6', () => {
    expect(calculator.multiply(3, 2)).toEqual(6);
  })
  it('should warn user to input numbers', () => {
    expect(calculator.multiply(2, 'b')).toBe('Please provide a valid number');
  })
})