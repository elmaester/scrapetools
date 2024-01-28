export const clean = (str) =>
  str?.replace ? str.replace(/\s\s+/g, ' ').trim() : null;

export const between = (left, right, str) => {
  const startPos = str.indexOf(left);
  const endPos = str.indexOf(right, startPos + left.length);
  if (endPos === -1 && right != null) return '';
  else if (endPos === -1 && right == null)
    return str.substring(startPos + left.length);
  else return str.slice(startPos + left.length, endPos).trim();
};

export const parseNumber = (value) => parseInt(value.replace(/\D/g, ''));

export const convertToCamelCase = (inputString) => {
  // Split the string into words using spaces as the delimiter
  const words = inputString.split(' ');

  // Capitalize the first letter of each word (except the first word)
  for (let i = 1; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }

  // Join the words together to form camelCase
  const camelCaseString = words.join('');

  return camelCaseString;
};
