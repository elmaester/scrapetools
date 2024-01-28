export const between = (left, right, str) => {
  const startPos = str.indexOf(left);
  const endPos = str.indexOf(right, startPos + left.length);
  if (endPos === -1 && right != null) return '';
  else if (endPos === -1 && right == null)
    return str.substring(startPos + left.length);
  else return str.slice(startPos + left.length, endPos).trim();
};

export const convertToCamelCase = (inputString) => {
  const words = inputString.split(' ');
  for (let i = 1; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }
  const camelCaseString = words.join('');
  return camelCaseString;
};

export const clean = (str) =>
  str?.replace ? str.replace(/\s\s+/g, ' ').trim() : null;

export const parseNumber = (value) => parseInt(value.replace(/\D/g, ''));

export const prependWithZeros = (number, targetLength = 2) => {
  const numberAsString = '' + number;
  const numberLength = numberAsString.length;
  if (numberLength === targetLength) {
    return numberAsString;
  } else {
    const prefix = Array.from({ length: targetLength - numberLength })
      .fill('0')
      .join('');
    return prefix + numberAsString;
  }
};
