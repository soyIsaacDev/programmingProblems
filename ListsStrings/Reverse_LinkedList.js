/* Linked List

    * Creacion
    * Size
    * Reversa de la Lista               */


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

var List = new LinkedList()
List.add(16);
List.add(21);
List.add(32);
List.add(44);
List.size();



 LinkedList.prototype.reverse = function () {
    var ListaReversa = new LinkedList();
    var first = this.head;
    var currentReverse = this.head;
    // invocar el tamaño
    // un while que se repita por el tamaño de la Lista
    var size = this.size();
    while (size > 0){
        if (!currentReverse) {
            return "La Lista esta Vacia"
        }
        while (currentReverse.next){
            var penUltimo = currentReverse;
            currentReverse = currentReverse.next;         
        }
        penUltimo.next = null;
        ListaReversa.add(currentReverse.value);
        currentReverse = this.head;
        size = size -1;
    }
    
    console.log(ListaReversa);
    return ListaReversa;
    
} 

List.reverse();
