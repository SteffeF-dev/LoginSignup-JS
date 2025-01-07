import fs from "fs"


//Read storage.txt with parse and put it through LoopDatabase to check for email and then return password
const DatabaseRead = (input) => {
    const accdata = fs.readFileSync("Storage.txt", "utf8");
    const reader = JSON.parse(accdata);
    let accPass;

    LoopDatabase(input, reader) ? accPass = LoopDatabase(input, reader) : console.log(`${input} hasn't been registered`);
    return accPass;
}

const LoopDatabase = (string, list) => {
    for (var i = 0; i < list.length; i++) {

        if (string === list[i].email) {
            return list[i].password;
        }
    }

}

/*const DatabaseRead = (dataCallback) => {
    fs.readFile("Storage.txt", "utf8", (err, data) => {
        err ? console.error(err) : dataCallback(data);
    });
    console.log("data read?")
}

function DatabaseData(data) {
    const dataObj = data;
    console.log(dataObj);
    console.log("Data saved?")
    return dataObj;
}

const DataWrapper = () => {
    console.log("Async?");
    console.log(DatabaseRead(DatabaseData));
    console.log("after callback?")
}*/

export default DatabaseRead