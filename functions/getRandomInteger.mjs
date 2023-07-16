function getRandomInteger(min, max) {
  if (min >= max) {
    throw new Error("Invalid range");
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default getRandomInteger;
