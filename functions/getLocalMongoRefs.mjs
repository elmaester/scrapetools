import { MongoClient } from 'mongodb'

const url = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(url)

async function getLocalMongoRefs(dbName, collectionNames) {
  await client.connect()
  const db = client.db(dbName)
  const collections = collectionNames.map((name) => db.collection(name))
  return { collections, db, client }
}

export default getLocalMongoRefs
