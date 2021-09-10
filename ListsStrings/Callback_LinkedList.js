/* Linked List

    * Creacion
    * CallBack
    * Perfect Squares               */


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

function perfectSquares (list, maxSquares) {
    var counter = 0;
    var num = 1;
    var arrayPerfectSquares = [];
    var List = list;
    while (counter <= maxSquares){
        var perfectSquareNum = num * num;
        //arrayPerfectSquares.push(perfectSquareNum)
        List.add(perfectSquareNum);
        num ++;
        counter++;
    }
    console.log(List)
    return List;
}

// perfectSquares (5);
/*  */

LinkedList.prototype.on_all = function (callback, repeat) {
    var current = this.head;
    var list = this;
    if(!current) {
        console.log ("La Lista esta Vacia");
        return 0;
    }
    while (current.next) {
        current = current.next;  
    }
    callback(list,repeat);
}

var List = new LinkedList()
List.add(280);
List.add(148);
List.on_all(perfectSquares, 12);