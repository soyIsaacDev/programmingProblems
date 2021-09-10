/* Linked List

    * Creacion
    * Devuelve Elementos en posiciones pares            */



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

 LinkedList.prototype.odd = function () {  
    var current = this.head;
    var counter = 0;
    var arrOddPos = [];
    if(!current) {
        console.log ("La Lista esta Vacia");
        return 0;
    }
    while (current.next) {
        counter ++;
        if(counter % 2 === 0){
            arrOddPos.push(current.value);
            current = current.next;
        } else current = current.next;
        
    }
    counter ++;
        if(counter % 2 === 0){
            arrOddPos.push(current.value);
        }
    console.log(arrOddPos)
    return arrOddPos;
} 

var List = new LinkedList()
List.add(16);
List.add(21);
List.add(32);
List.add(44);
List.add(14);
List.add(22);
List.add(37);
List.add(45);
List.add(100);

List.odd();