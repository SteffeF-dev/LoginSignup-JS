const isValidEmail = (email) => {
  const str = email.split("@");
  if (email.includes(" ")) {
    return false;
  }

  if (str.length === 2 && str[1].includes(".") && str[1].at(0) !== ".") {
    return true;
  }
  return false;
};

export default isValidEmail;
