import dedupeArray from './dedupeArray.mjs';

const insertUniqueDocsIntoMongo = async (
  objects,
  mongoCollection,
  fieldName
) => {
  if ([null, undefined].includes(objects)) {
    throw new Error(
      `passed ${objects}, unacceptable parameter, to the insertUnique function`
    );
  }
  const arrayOfObjects = Array.isArray(objects) ? objects : [objects];

  const filteredArray = dedupeArray(arrayOfObjects, fieldName);

  const existingValues = await mongoCollection.distinct(fieldName);

  const itemsToInsert = filteredArray.filter(
    (obj) => !existingValues.includes(obj[fieldName])
  );

  if (itemsToInsert.length > 0) {
    await mongoCollection.insertMany(itemsToInsert);
    console.log(`inserted ${itemsToInsert.length} new unique docs`);
  }
};

export default insertUniqueDocsIntoMongo;
