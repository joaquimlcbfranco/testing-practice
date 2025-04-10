const calculator = {
  add: (n1, n2) => {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
      return 'Please provide a valid number';
    }
    return n1 + n2;
  },

  subtract: (n1, n2) => {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
      return 'Please provide a valid number';
    }
    return n1 - n2;
  },

  divide: (n1, n2) => {
    if (n2 === 0) {
      return 'Can\'t divide by 0'
    }
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
      return 'Please provide a valid number';
    }
    return n1 / n2;
  },

  multiply: (n1, n2) => {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
      return 'Please provide a valid number';
    }
    return n1 * n2;
  },
}

module.exports = calculator;

