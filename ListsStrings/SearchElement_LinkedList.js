/* Linked List

    * Creacion
    * Size
    * Buscar elemento en la Lista            */



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

 LinkedList.prototype.search = function (searchedValue) {  
    var current = this.head;
    if(!current) {
        console.log ("La Lista esta Vacia");
        return 0;
    }
    while (current.next) {
        if(searchedValue === current.value){
            console.log (searchedValue);
            return searchedValue;
        } else current = current.next;
    }
    console.log("El valor no se encuentra en la lista")
    return 0;
} 

var List = new LinkedList()
List.add(16);
List.add(21);
List.add(32);
List.add(44);
List.search(21);