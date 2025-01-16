import isValidEmail from "./emailchecker.js";
import PasswordChecker from "./passwordcheck.js";
import PromptSync from "prompt-sync";
import { DatabaseSearch } from "./storageread.js";
import { DatabaseCheck } from "./storageread.js";
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
};

const Login = (string) => {
  string = prompt("Please enter your email: ");

  if (DatabaseSearch(string)) {
    const matchPass = DatabaseSearch(string);
    PassMatch(matchPass);
  }
};

const Signup = (input) => {
  input = prompt("Enter email: ");
  if (isValidEmail(input) && !DatabaseCheck(input)) {
    const email = input;
    console.log(`${email} is a valid email`);
    input = prompt("Enter password: ");
    PasswordChecker(input)
      ? AddAcc(email, input)
      : console.log(`${input} is too weak`);
  } else {
    console.log(`${input} is incorrect format or has already been registered`);
  }
};

const AddAcc = (email, pass) => {
  const objHolder = { id: 0, email: email, password: pass };
  accountList.push(objHolder);
  console.log(accountList);
  console.log("Sign up added!");
  DatabaseData(accountList);
};

const PassMatch = (matchPass) => {
  input = prompt("Please enter your password: ");
  matchPass === input
    ? console.log(`Logged in, welcome!`)
    : console.log("Invalid password ");
};

export default AccountInterface;
