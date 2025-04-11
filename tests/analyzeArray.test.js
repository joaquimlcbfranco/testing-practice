const analyzeArray = require('../src/analyzeArray');

describe(('#analyzeArray'), () => {
  describe(('#average'), () => {
    it('should output 1', () => {
      expect(analyzeArray([1]).average).toBe(1);
    })
    it('should output 4', () => {
      expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
    })
    it('should output 0', () => {
      expect(analyzeArray([]).average).toBe(0);
    })
  })
  
  describe(('#min'), () => {
    it('should output 2', () => {
      expect(analyzeArray([2, 4]).min).toBe(2);
    })
    it('should output 1', () => {
      expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
    })
  })

  describe(('#max'), () => {
    it('should output 8', () => {
      expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
    }) 
  });

  describe(('#length'), () => {
    it('should output 6', () => {
      expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
    }) 
  });
});