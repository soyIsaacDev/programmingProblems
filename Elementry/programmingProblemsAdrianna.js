/* 
1.-Write a program that prints ‘Hello World’ to the screen.
function cambiaTexto() {
    var element = document.getElementById("Texto");
    
    console.log(element.innerHTML);
    element.innerHTML = "Hello World";
} 
window.onload = cambiaTexto() */

// 2.- Write a program that asks the user for their name and greets them with their name.

function getName () {
    var name = document.getElementById("name").value;
    //document.getElementById("Hi").innerHTML = "Hola " + name;
    var sayHi = document.getElementById("Hi");
    sayHi.innerHTML = "Hola " + name;
}