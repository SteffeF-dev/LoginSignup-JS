const PasswordChecker = (password) => {
    const passlength = password.length;

    if (passlength >= 5 && !CheckNumb(password) && !CheckCharacter(password)) {
        console.log("Password is weak");
        return password;

    }
    if (passlength >= 7 && CheckNumb(password) && !CheckCharacter(password)) {
        console.log("Password is medium");
        return password;
    }
    if (passlength >= 8 && CheckCharacter(password) && CheckNumb(password)) {
        console.log("Password is strong");
        return password;
    }
    else {
        return false;
    }
}

const CheckNumb = (string) => {
    const regex = /\d/g;
    return regex.test(string);
}

const CheckCharacter = (string) => {
    const regex = /[^\s\w"']/g;
    return regex.test(string);
}

export default PasswordChecker