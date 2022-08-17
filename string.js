const strLen = str => str.length;

const strCheck = str => {
  if (str.trim().length > 0 && str.trim().length <= 10) return true;
  return false;
}

const reverseString = str => {
  return str.split('').reverse().join('');
}

const capitalize = str => {
 return str[0].toUpperCase() + str.slice(1);
}

module.exports = { strLen, strCheck, reverseString, capitalize };