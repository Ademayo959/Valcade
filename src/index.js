let isAlphabetic = (text) => {
    const pattern = /^[a-zA-Z]+$/;
    let result = pattern.test(String(text));
    return {
        result: result,
        message: result ? "String is alphabetic" : "String must be alphabetic"
    }
};

let isNumeric = (number) => {
    const pattern = /^[0-9]+$/;
    let result = pattern.test(Number(number));
    return {
        result: result,
        message: result ? "Value is Numeric" : "Value must be Numeric"
    }
}

let isAlphaNumeric = (value) => {
    const pattern = /^[a-zA-Z0-9]+$/;
    let result = pattern.test(String(value));
    return {
        result: result,
        message: result ? "String is alphanumeric" : "String must be alphanumeric"
    }
};

let isUppercase = (value) => {
    const pattern = /^[A-Z]+$/;
    let result = pattern.test(String(value));
    return {
        result: result,
        message: result ? "String is uppercase" : "String must be uppercase"
    }
};

let isDecimal = (number) => {
    const pattern = /^\d+\.\d+$/
    let result = pattern.test(number);
    return {
        result: result,
        message: result ? "Number is a decimal" : "Number must be a decimal"
    }
}

let isGmail = (string) => {
    const pattern = /^[a-zA-Z0-9.]+@gmail\.com$/
    let result = pattern.test(String(string));
    return {
        result: result,
        message: result ? "String is a Gmail" : "String must be a Gmail"
    }
}

let isEmail = (string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let result = pattern.test(String(string));
    return {
        result: result,
        message: result ? "String is an Email" : "String must be an Email"
    }
}

let isWeakPassword = (value) => {
    let result = str.length >= 6;
    return {
        result: result,
        message: result ? "Password is Weak" : "Password must be at least 6 characters"
    }
};

let isMediumPassword = (value) => {
    let str = String(value)
    const hasLower = /[a-z]/.test(str)
    const hasUpper = /[A-Z]/.test(str)
    const hasNumber = /[0-9]/.test(str)
    const is8CharsLong = str.length >= 8
    let result = hasLower && hasUpper && hasNumber && is8CharsLong;
    return {
        result: result,
        message: result ? "Password is Medium" : "Password must be at least 8 characters"
    }
};

let isStrongPassword = (value) => {
    let str = String(value);
    const hasLower = /[a-z]/.test(str);
    const hasUpper = /[A-Z]/.test(str);
    const hasNumber = /[0-9]/.test(str);
    const hasSpecialChars = /[!@#$%^&*]/.test(str);
    const is10CharsLong = str.length >= 10
    let result = hasLower && hasUpper && hasNumber && hasSpecialChars && is10CharsLong
    return {
        result: result,
        message: result ? "Password is Strong" : "Password must be at least 10 characters and contain number, letters and special characters"
    }

};

let isPhoneNumber = (string) => {
    const pattern = /^\+?[0-9]{7,15}$/
    let result = pattern.test(String(string));
    return {
        result: result,
        message: result ? "Value is a Phone Number" : "Value must be a valid Phone Number"
    }
}

let isLowercase = (value) => {
    const pattern = /^[a-z]+$/;
    let result = pattern.test(String(value));
    return {
        result: result,
        message: result ? "String is lowercase" : "String must be lowercase"
    }
};

let isURL = (value) => {
    try {
        new URL(value);
        return {result: true, message: "String is a URL"}
    } catch {
        return {result: false, message: "String must be a URL"}
    }
};

let isPositive = (number) => {
    const pattern = /^[0-9]+$/
    let result = pattern.test(Number(number));
    return {
        result: result,
        message: result ? "Value is a Positive number" : "Value must be a Positive number"
    }
}

let isNegative = (number) => {
    const pattern = /^-[0-9]+$/
    let result = pattern.test(Number(number));
    return {
        result: result,
        message: result ? "Value is a Negative number" : "Value must be a Negative number"
    }
}


let isEmpty = (value) => {
    return value.trim() == ''
}

let isNotEmpty = (value) => {
    return value.trim() !== ''
}





//console.log(isAlphabetic('1z2s3d'))
//console.log(isAlphabetic('acdbdbdd').message)
//console.log(isAlphabetic('2525262'))
//console.log(isAlphabetic(2626262))
//console.log(isNegative(-12))
//console.log(isNegative('-1a2'))
//console.log(isNegative('-12'))
//console.log(isNegative(12))
//console.log(isEmpty(""))
//console.log(isNotEmpty('fgf'))
//console.log(isNotEmpty(''))
//console.log(isAlphaNumeric('1dafadaf'))
//console.log(isAlphaNumeric('12324'))
//console.log(isAlphaNumeric('1dafadaf'))
//console.log(isURL('1djdj'))
//console.log(isDecimal(0.2))
//console.log(isEmail('ademayo234@gmail.com'))
//console.log(isEmail('ademayo234'))
console.log(isStrongPassword('sgAsg7878##'))
console.log(isStrongPassword('sgsg##'))
console.log(isStrongPassword('sgsg7878009090'))
console.log(isMediumPassword('sgsg7878##'))
console.log(isMediumPassword('sgs##'))
console.log(isMediumPassword('sgsg78sgs'))