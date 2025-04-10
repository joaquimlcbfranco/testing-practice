const capitalize = (string) => {
  return string.split('')[0].toUpperCase() + string.split('').slice(1).join('');
}

module.exports = capitalize;