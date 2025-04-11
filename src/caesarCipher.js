const caesarCipher = (string, shift) => {
  const originalString = string.split('');
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  const newString = originalString.map((char) => {
    if (alphabet.includes(char.toLowerCase())) {
      const charIndex = alphabet.indexOf(char.toLowerCase());
      let newIndex = (charIndex + shift) % 26;
      if (newIndex < 0) {
        newIndex = 26 + newIndex;
      }
      else if (newIndex > 25) {
        newIndex = newIndex - 26;
      }
      let newChar;
      char === char.toUpperCase() ? newChar = alphabet[newIndex].toUpperCase() : newChar = alphabet[newIndex];
      return newChar;
    }
    return char;
  });

  return newString.join('');
};

module.exports = caesarCipher;
1