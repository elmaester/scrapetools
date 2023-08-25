import getLowDbInstance from "./getLowDbInstance.mjs";
import getSortableDate from "./getSortableDate.mjs";
import fs from "fs";

async function backUpAsJson(data, description) {
  if (typeof data === "object" && data !== null) {
    if (!fs.existsSync("./backups")) {
      fs.mkdirSync("./backups");
    }
    const path = `./backups/${getSortableDate()}${
      description ? "_" + description : ""
    }.json`;
    const db = await getLowDbInstance(path);
    db.data = data;
    await db.write();
    console.log(
      `Saved ${description ? description + " " : ""}backup to path: ${path}`
    );
  } else {
    console.log(
      "Passed something that was neither Object nor Array to backUpAsJson. Nothing happened."
    );
  }
}

await backUpAsJson("test");

export default backUpAsJson;
