/* Linked List

    * Concatenate 2 Linked Lists
    * Combine Alternating 2 Linked Lists 
    * Merge 2 Sorted List ---> New Sorted List             */


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

LinkedList.prototype.concat = function (List2) {
    var current = List2.head;
    var List = this;
    if(!current) {
        console.log ("La Lista esta Vacia");
        return 0;
    }
    while (current.next) {
        List.add(current.value); 
        current = current.next;    
    }
    List.add(current.value);
    console.log(List);
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

LinkedList.prototype.combine = function (secondList) {
    var firstList = this;
    var current = this.head;
    var current2 = secondList.head;
    var firstListSize = firstList.size();
    var secondListSize = secondList.size();
    var combinedList = new LinkedList();

    if(firstListSize === 0) {
        console.log ("Primer Lista esta vacia, solo tenemos ");
        console.log (secondList); 
        return secondList;
    }
    if(secondListSize === 0) {
        console.log ("Segunda Lista esta vacia, solo tenemos ");
        console.log(firstList); 
        return firstList;
    }
    if(firstListSize === 0 && secondListSize === 0) console.log("Listas Vacias");
    else {
        while(firstListSize > 0 || secondListSize > 0){
            if(firstListSize > 0){
                combinedList.add(current.value);
                current = current.next;
                firstListSize --;
            }
            if(secondListSize > 0){
                combinedList.add(current2.value);
                current2 = current2.next;
                secondListSize --;
            } 
        }       
    }    
    console.log(combinedList);
}

LinkedList.prototype.merge = function (secondList) {
    var firstList = this;
    var current = this.head;
    var current2 = secondList.head;
    var firstListSize = firstList.size();
    var secondListSize = secondList.size();
    var mergedList = new LinkedList();

    if(firstListSize === 0) {
        console.log ("Primer Lista esta vacia, solo tenemos ");
        console.log (secondList); 
        return secondList;
    }
    if(secondListSize === 0) {
        console.log ("Segunda Lista esta vacia, solo tenemos ");
        console.log(firstList); 
        return firstList;
    }
    if(firstListSize === 0 && secondListSize === 0) console.log("Listas Vacias"); 
    else {
        while(firstListSize > 0 || secondListSize > 0){
            if (firstListSize === secondListSize ){
                if(current.value <= current2.value){
                    mergedList.add(current.value);
                    mergedList.add(current2.value);
                    firstListSize --;
                    secondListSize --;
                    current = current.next;
                    current2 = current2.next;
                } else if (current.value > current2.value) {
                    mergedList.add(current2.value);
                    mergedList.add(current.value);
                    firstListSize --;
                    secondListSize --;
                    current = current.next;
                    current2 = current2.next;
                }
            }
            else if (firstListSize > secondListSize){
                if(current2 !== null){
                    if(current.value <= current2.value){
                        mergedList.add(current.value);
                        mergedList.add(current2.value);
                        firstListSize --;
                        secondListSize --;
                        current = current.next;
                        current2 = current2.next;
                    } else if (current.value > current2.value) {
                        mergedList.add(current2.value);
                        mergedList.add(current.value);
                        firstListSize --;
                        secondListSize --;
                        current = current.next;
                        current2 = current2.next;
                    }
                } else {
                    mergedList.add(current.value)
                    firstListSize --;
                    current = current.next;
                }
            }
            else {
                if(current !== null){
                    if(current.value <= current2.value){
                        mergedList.add(current.value);
                        mergedList.add(current2.value);
                        firstListSize --;
                        secondListSize --;
                        current = current.next;
                        current2 = current2.next;
                    } else if (current.value > current2.value) {
                        mergedList.add(current2.value);
                        mergedList.add(current.value);
                        firstListSize --;
                        secondListSize --;
                        current = current.next;
                        current2 = current2.next;
                    }
                } else {
                    mergedList.add(current2.value)
                    secondListSize --;
                    current2 = current2.next;
                }
            }
        }       
    }    
    console.log(mergedList);
}

var List = new LinkedList()
List.add(1);
List.add(4);
List.add(6);

var secondList = new LinkedList();
secondList.add(2);
secondList.add(3);
secondList.add(5);
secondList.add(17);
secondList.add(18);

List.merge(secondList)