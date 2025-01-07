
const isValidEmail = (email) => {
    let checker = email.includes(" ");

    if (checker) {
        return false;
    }

    if (!checker) {
        var kerroin = 0;
        for (var i = 0; i < email.length; i++) {
            if (email[i] === "@") {
                kerroin++;
            }

        }
        if (kerroin > 1) {
            return false;
        }

        if (kerroin === 1) {
            const atsign = "@";
            const validPartIndex = email.lastIndexOf(atsign);
            const dotblocker = email[validPartIndex + 1] === ".";

            if (dotblocker) {
                return false;
            }
            if (!dotblocker) {
                return email;
            }


        }


    }
}

export default isValidEmail