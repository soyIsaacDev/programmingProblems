/* Linked List

    * Creacion
    * Valor mas grande dentro de la lista
    *   2 opciones para hacerlo                 */


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

LinkedList.prototype.largest = function() {
    var current = this.head;
    var mayor = current.value;
    if (!current) return "Lista vacia"
    while(current.next){
        if(mayor < current.next.value) {
            mayor = current.next.value;
            current = current.next;
        } else current = current.next;
    }
    console.log(mayor);
    print(mayor);
    return mayor;
} 

/*  ----  Otra forma de hacer el Largest ---

LinkedList.prototype.largest = function() {
    var current = this.head;
    var mayor = 0;
    if (!current) return "Lista vacia"
    while(current.next){
        if(mayor < current.value) {
            mayor = current.value;
            current = current.next;
        } else current = current.next;
    } 
    if(mayor < current.value){
        mayor = current.value;
    }
    console.log(mayor);
    return mayor;
} */

function print(mayor) {
            var printMayor = document.getElementById("impMayor");
            printMayor.innerHTML = mayor;
} 

var List = new LinkedList()
List.add(9);
List.add(12);
List.add(22);
List.add(390);
List.add(180);
List.add(55)
List.add(38)
List.add(40)
List.add(88)
List.add(220)
List.largest();

