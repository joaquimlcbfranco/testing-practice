const analyzeArray = (array) => {
  const sum = array.reduce((prev, sum) => {
    return sum += prev;
  }, 0)

  return sum;
}

module.exports = analyzeArray;