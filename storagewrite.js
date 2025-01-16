import { DatabaseRead } from "./storageread.js";
import fs from "fs";

const listHold = [];

//Read from storage.json, merge list with a new sign-up and arrange id.
const DatabaseData = (newList) => {
  const concList = listHold.concat(DatabaseRead(), newList);

  const mapId = concList.map((value, index) => {
    return { ...value, id: index + 1 };
  });

  DatabaseWrite(mapId);
};

//Write everything to Storage.json, will overwrite file when new data added.
const DatabaseWrite = (accobj) => {
  const stringit = JSON.stringify(accobj);
  fs.writeFileSync("Storage.json", `${stringit}`, (err) => {
    err ? console.error(err) : console.log("Saved to storage");
  });
};

export default DatabaseData;
