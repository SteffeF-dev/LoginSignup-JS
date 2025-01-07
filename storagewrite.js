import fs from "fs"

const listHold = [];

//read from storage.txt and save the data for LoopIt, then combine old list with new list from Sign-ups and sort ids with loop
const DatabaseData = (newList) => {
    const accdata = fs.readFileSync("Storage.txt", "utf8");
    const readit = JSON.parse(accdata);

    LoopIt(readit);

    listHold.push(...newList);


    for (var i = 0; i < listHold.length; i++) {
        listHold[i].id = i;
    }

    DatabaseWrite(listHold);

}

//Pick up storage.txt objects and add them to temp array listHold
const LoopIt = (accobj) => {
    for (var i = 0; i < accobj.length; i++) {
        listHold.push({ id: i, email: accobj[i].email, password: accobj[i].password });
    }
}

//Write everything to Storage.txt, will overwrite file when new data added.
const DatabaseWrite = (accobj) => {
    const stringit = JSON.stringify(accobj);
    fs.writeFileSync("Storage.txt", `${stringit}`, err => {
        err ? console.error(err) : console.log("Saved to storage");
    });

}

export default DatabaseData;