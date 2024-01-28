const dedupeArray = (arrayOfObjects, fieldName) => {
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
};

export default dedupeArray;
