// Return Digits in an Array from given number

function numberToDigits(number) {
    var array = [];
    var stringNumbers = number.toString();
    for (let i = 0; i < stringNumbers.length; i++) {
        array.push(stringNumbers[i])        
    }
    console.log(array)
}

numberToDigits(43532);