/* Linked List

    * Creacion
    * Suma de Elementos de 3 formas
    *   Usando
    *           for-loop,
    *           while-loop
    *           recursion.             */



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

 LinkedList.prototype.sumWhile = function () {  
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

LinkedList.prototype.sumFor = function () {  
    var current = this.head;
    var size = this.size();
    var sum = 0;
    if(!current) {
        console.log ("La Lista esta Vacia");
        return 0;
    }
    for (let i = 0; i < size; i++) {
        sum += current.value;
        current = current.next;
    }
    console.log(sum);
    return sum;
}

LinkedList.prototype.sumRecursive = function (current,sum) { 
    if(current === undefined){
        var sum = 0;
        var current = this.head;
        if(!current) {
            console.log ("La Lista esta Vacia");
            return 0;
        } else { 
            sum += current.value;
            current = current.next; 
            return this.sumRecursive(current, sum);
        }
    } else {
        if(current.next) {
            sum += current.value;
            current = current.next;
            return this.sumRecursive(current,sum)
        } else if(!current.next) {
            sum += current.value;
        } 
        console.log(sum);
        return sum;
    }      
}

var List = new LinkedList()
List.add(16);
List.add(42);
List.add(40);
List.add(3232);
List.add(123);
List.sumFor();
List.sumRecursive();