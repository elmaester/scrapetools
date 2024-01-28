import { MongoClient } from 'mongodb';

async function getMongoRefs(
  dbName,
  collectionQuery,
  url = 'mongodb://127.0.0.1:27017'
) {
  const client = new MongoClient(url);
  await client.connect();
  const db = client.db(dbName);
  let col;
  if (typeof collectionQuery === 'string') {
    col = db.collection(collectionQuery);
  } else if (Array.isArray(collectionQuery)) {
    col = collectionQuery.map((name) => db.collection(name));
  }
  return { col, db, client };
}

export default getMongoRefs;
