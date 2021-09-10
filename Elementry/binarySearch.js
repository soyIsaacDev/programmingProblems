// This is a Binary Search with different techniques

var searchArray = [1,3,5,7,4,9,22,66,99]
var lookUpValue = 66;

function chop(lookUpValue, searchArray){
    var startIndex = 0;
    var endIndex = searchArray.length -1;
    var middleIndex = Math.floor((searchArray.length-1)/2); //5
    if (searchArray.length === 1) {
        if(searchArray[0] === lookUpValue ){
            console.log(searchArray[0])
            return searchArray[0];
        } else  console.log("El numero no se encuentra");
    } else if (searchArray === 0) {
        return "Array esta vacio";
    } 
    else{
        if(searchArray[middleIndex] < lookUpValue ) {
            startIndex = middleIndex + 1;
            endIndex = searchArray.length + 1;
        } else {
            endIndex = middleIndex + 1 ;
        }
        var arrayRecursion = searchArray.slice(startIndex, endIndex);
        return chop (lookUpValue, arrayRecursion);
    }
}
chop(lookUpValue, searchArray);