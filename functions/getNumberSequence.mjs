const getNumberSequence = (length, zeroBased) => {
  const array = [];
  for (let i = zeroBased ? 0 : 1; zeroBased ? i < length : i <= length; i++) {
    array.push(i);
  }
  return array;
};

export default getNumberSequence;
