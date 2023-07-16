function getLocalMongoCollectionReference(dbName, collectionName) {
  const db = monk(`127.0.0.1:27017/${dbName}`);
  const collectionReference = db.get(collectionName);
  return collectionReference;
}

export default getLocalMongoCollectionReference;
