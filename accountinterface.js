import isValidEmail from "./emailchecker.js";
import PasswordChecker from "./passwordcheck.js";
import PromptSync from "prompt-sync";
import DatabaseRead from "./storageread.js";
import DatabaseData from "./storagewrite.js";

const accountList = [];
const prompt = PromptSync();
let input;

const AccountInterface = () => {
    input = prompt("Would you like to login or sign-up? ");

    switch (input) {
        case "login":
            Login(input);
            break;
        case "sign":
            Signup(input);
            break;
        default:
            console.log(`invalid command ${input}`);
            AccountInterface();
    }
}

const Login = (string) => {

    string = prompt("Please enter your email: ");

    if (DatabaseRead(string) != undefined) {
        const matchPass = DatabaseRead(string);
        PassMatch(matchPass);
    }
    else {
        console.log("Invalid input");
    }

}

const Signup = (input) => {
    input = prompt("Enter email: ");
    if (isValidEmail(input)) {
        if (DatabaseRead(input) === undefined) {
            const email = isValidEmail(input);
            console.log(`${email} is a valid email`);
            input = prompt("Enter password: ");
            PasswordChecker(input) ? AddAcc(email, input) : console.log(`${input} is too weak`);
        }
        else {
            console.log(`${input} has already been registered`);
        }
    }
    else {
        console.log("Incorrect format");
    }
}

const AddAcc = (email, pass) => {
    const objHolder = AccTemplate(email, pass);
    accountList.push(objHolder);
    console.log(accountList);
    console.log("Sign up added!");
    DatabaseData(accountList);
}

const AccTemplate = (email, pass) => {
    const accountObj = { id: 0, email: email, password: pass };
    return accountObj;
}

/*const AccSearch = (string) => {
    const user = (user) => user.email === string;
    const userIndex = accountList.findIndex(user);
    return userIndex;
}*/


const PassMatch = (matchPass) => {
    /*const holdIndex = AccSearch(string);
    const passMatch = accountList[holdIndex].password;*/
    input = prompt("Please enter your password: ");
    matchPass === input ? console.log(`Logged in, welcome!`) : console.log("Invalid password ");
}

export default AccountInterface