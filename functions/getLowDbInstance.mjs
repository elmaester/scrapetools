import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

async function getLowDbInstance(path) {
  const adapter = new JSONFile(path);
  const defaultData = [];
  const db = new Low(adapter, defaultData);
  await db.read();
  return db;
}

export default getLowDbInstance;
