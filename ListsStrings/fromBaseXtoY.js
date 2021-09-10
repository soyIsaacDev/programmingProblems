// From Base 2 to base 10

//changeBase ([2,1,0], 3, 10)

function changeBase (array, baseFrom, baseTo){
    var n = 0;
    var changedToBaseArray = [];
    for (let i = array.length -1; i >= 0; i--) {
        var elevatedBase = Math.pow(baseFrom,n)
        var changedDigit = array[i] * elevatedBase; 
        n ++;
        if(i === array.length -1 &&  changedDigit === 0) {
           
        }
        else changedToBaseArray.unshift(changedDigit);   
    }
    console.log(changedToBaseArray);
    print(changedToBaseArray);
    return changedToBaseArray;
}

changeToDecimal ([4,2], 10, 2)

function changeToDecimal (array, baseFrom, baseTo){
    var number = 0;
    var exponential = 0;
    var changedToBaseArray = [];
    // change number to base 10 
    for (let i = array.length - 1; i >= 0; i--) {
        number += array[i] * Math.pow(baseFrom,exponential);
        exponential++;
    }
    var division = Math.floor(number / baseTo);
    var resto = Math.floor(number % baseTo);
    changedToBaseArray.unshift(resto);
    
    while (division > 0){
        var divAnterior = division;
        division = Math.floor(division / baseTo);
        resto = Math.floor(divAnterior % baseTo);
        changedToBaseArray.unshift(resto);
    }
    
    console.log(changedToBaseArray);
    print(changedToBaseArray);
}



function print(array) {
    var printBisiesto = document.getElementById("impMayor");
    printBisiesto.innerHTML = array;
}   
