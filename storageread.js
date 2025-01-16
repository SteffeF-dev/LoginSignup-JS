import fs from "fs";

//Read storage.json with parse
const DatabaseRead = () => {
  const accdata = fs.readFileSync("Storage.json", "utf8");
  const reader = JSON.parse(accdata);
  return reader;
};

//if email exists, return password
const DatabaseSearch = (input) => {
  if (DatabaseCheck(input)) {
    const loginPassIndex = DatabaseRead().findIndex(
      (user) => user.email === input
    );
    const accPass = DatabaseRead()[loginPassIndex].password;
    return accPass;
  }
};
//check email exists and verify that an email hasn't been already registered when signing up
const DatabaseCheck = (input) => {
  return DatabaseRead().some((user) => user.email === input);
};

export { DatabaseSearch, DatabaseCheck, DatabaseRead };
