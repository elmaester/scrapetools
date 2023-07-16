async function filterExistingMongoDocs(arrayOrDoc, collectionRef, criterion) {
  const array = Array.isArray(arrayOrDoc) ? arrayOrDoc : [arrayOrDoc];

  const preFilteredArray = await Promise.all(
    array.map(async (item) => {
      const search = await collectionRef.findOne({
        [criterion]: item[criterion],
      });
      return search ? null : item;
    })
  );

  const filteredArray = preFilteredArray.filter((item) => item !== null);

  return filteredArray;
}

export default filterExistingMongoDocs;
