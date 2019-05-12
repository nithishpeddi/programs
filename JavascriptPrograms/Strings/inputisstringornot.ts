// check if given input is string or not

function inputValidation(value) {
    if (typeof value == 'string') {
        return true;
    } else {
        return false;
    }
}

console.log(inputValidation('hello'));

// console.log(inputValidation(123));