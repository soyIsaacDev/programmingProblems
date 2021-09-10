/* Linked List

    * Creacion
    * Rotate Elements           */



function LinkedList() {
    this.head = null;
  }

function Node (value) {
    this.value = value;
    this.next = null;
}

LinkedList.prototype.add = function (element) {
    var nodo = new Node (element);
    var current = this.head;
    if (current === null) {
        this.head = nodo;
        return nodo;
    } 
    while (current.next){
        current = current.next;
    } 
    current.next = nodo;  
    return nodo;  
}

LinkedList.prototype.size = function (){
    var current = this.head;
    var size = 0;
    if(!current) {
        console.log (0);
        return 0;
    }
    while (current.next) {
        size += 1;
        current = current.next;
    }
    size += 1;
    console.log(size);
    return size;
}

/* Write a function that rotates a list by k elements. For example
 [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]. */

 LinkedList.prototype.rotate = function (rotateNode) {  
    var currentInRotateFunction = this.head;
    var List = this;
    var rotateCounter = 1;
    if(!currentInRotateFunction) {
        console.log ("La Lista esta Vacia");
        return 0;
    }
    // cambiamos nodo a lo ultimo mientras el numero de rotaciones sea menor a la 
    // posicion del nodo a rotar; guardando el valor del primer nodo para agregarlo a lo ultimo.
    
    while(rotateCounter < rotateNode){
        var storedValue = currentInRotateFunction.value;
        List.head = currentInRotateFunction.next;
        // avanzamos al ultimo Nodo
        while (currentInRotateFunction.next) {
            currentInRotateFunction = currentInRotateFunction.next;
        }
        rotateCounter ++;
        currentInRotateFunction = this.head;
        List.add(storedValue);
    }
    console.log(List);
} 

var List = new LinkedList()
List.add(1);
List.add(2);
List.add(3);
List.add(4);
List.add(5);
List.add(6);
List.rotate(5);