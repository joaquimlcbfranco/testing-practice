const analyzeArray = require('../src/analyzeArray');

describe(('#analyzeArray'), () => {
  describe(('#average'), () = > {
    it('should output 1', () => {
      expect(analyzeArray([1]).average).toBe(1);
    })
  })
});