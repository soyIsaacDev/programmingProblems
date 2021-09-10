// Prints Array of Strings in a Frame

stringsInAFrame(["Hello", "World", "in", "a", "frame"]);

function stringsInAFrame (array){
    arrayAsterix = ["","*","**","***","****","*****","******","*******","********","* * * * *"];
    emptySpaceArray = [""," ","  ","   ","    ","     "];
    var biggerWord = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > biggerWord) {
            biggerWord = array[i].length;
        }  
    }
    console.log(arrayAsterix[biggerWord + 4]);
    for (let i = 0; i < array.length; i++) {
        var emptySpaceNeeded = biggerWord -array[i].length;
        console.log("* "+ array[i] + emptySpaceArray[emptySpaceNeeded], "*");      
    }
    console.log(arrayAsterix[biggerWord + 4]);
}


frase= "Hello World in a frame";

function separateWords (frase) {

}