/* Linked List

    * Creacion
    * Suma de Elementos            */



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

 LinkedList.prototype.sum = function () {  
    var current = this.head;
    var sum = 0;
    if(!current) {
        console.log ("La Lista esta Vacia");
        return 0;
    }
    while (current.next) {
        sum += current.value;
        current = current.next;
    }
    sum += current.value;
    console.log(sum);
    return sum;
} 

var List = new LinkedList()
List.add(16);
List.add(44);
List.add(40);
List.add(80);
List.add(35);
List.sum();