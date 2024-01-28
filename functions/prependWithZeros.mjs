const prependWithZeros = (number, targetLength = 2) => {
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

export default prependWithZeros;
