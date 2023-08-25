import { MongoClient } from "mongodb";

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function getLocalMongoRefs(dbName, collectionName) {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  return { collection, db, client };
}

export default getLocalMongoRefs;
