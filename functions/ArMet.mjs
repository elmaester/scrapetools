class ArMet {
  static chunk(sourceArray, chunkSize) {
    const outputArray = [];
    for (let i = 0; i < sourceArray.length; i += chunkSize) {
      const chunk = sourceArray.slice(i, i + chunkSize);
      outputArray.push(chunk);
    }
    return outputArray;
  }

  static dedupe(arrayOfObjects, fieldName) {
    const fieldValueCounts = {};

    const filteredArray = arrayOfObjects.filter((obj) => {
      if (!fieldValueCounts[obj[fieldName]]) {
        fieldValueCounts[obj[fieldName]] = 1;
      } else {
        fieldValueCounts[obj[fieldName]] += 1;
      }
      return fieldValueCounts[obj[fieldName]] === 1 ? true : false;
    });

    return filteredArray;
  }

  static getNumberSequence(length, zeroBased) {
    const array = [];
    for (let i = zeroBased ? 0 : 1; zeroBased ? i < length : i <= length; i++) {
      array.push(i);
    }
    return array;
  }
}

export default ArMet;
