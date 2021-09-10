/* String

    * Revisa si es un palindromo          */


function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join(""); 
    return joinArray; 
}

function palindrome (word) {
    var reversedWord = reverseString(word);
    if(word === reversedWord){
        console.log("es un Palindromo")
        return 1;
    } else console.log ("no es Palindromo"); return 0;
}
