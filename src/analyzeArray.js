const analyzeArray = (array) => {
  if (array.length === 0) {
    return {
      average: 0,
      min: 0,
      max: 0,
      length: 0,
    }
  }
  const sum = array.reduce((prev, sum) => {
    return sum += prev;
  }, 0)

  const min = array.sort()[0];
  const max = array.sort((a, b) => b - a)[0];

  return {
    average: (sum / array.length),
    min,
    max,
    length: array.length,
  };
}

module.exports = analyzeArray;