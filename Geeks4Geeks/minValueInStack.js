
class MyStack
{
    constructor(){
        this.arr =  new Array(1000);
        this.top = -1;
    }
    
    
}


/**
 * @param {number} x
*/
/* The method push to push element into the stack */
MyStack.prototype.push = function(x) {
  // code here
  this.arr.push(x);
  //console.log(stack);
}

/**
 * @returns {number} 
*/
/*The method pop which return the element 
  poped out of the stack*/
MyStack.prototype.pop = function() {
  // code here
  var popedOut = this.arr.pop();
  
  if (popedOut === undefined){ 
      console.log(-1);
      return -1
  } else {
      console.log(popedOut);
      return popedOut;   
  }
}

/**
 * @returns {number} 
*/
/*The method getMin() which return the minimum
element of the stack*/

MyStack.prototype.getMin = function() {
  // code here
  var count = 1;
  var myStackArray = this.arr;
  var one = myStackArray[myStackArray.length - count];
  //console.log(one);
  var menor = 0;

  if (one === undefined){
    //console.log("-1 ya no tiene argumentos");
    return -1;
  } else  {
    while(one){
        count ++;
        var two = myStackArray[myStackArray.length - count];
        if (two === undefined){
            //console.log (one);
            return one;
        } else {
            
            if(one < two){
                menor = one;            
            } else {
                menor = two;
            }
            one = menor;
        }
    }
    //console.log(menor);
    return menor;
  }
}

/* MyStack.prototype.getMin = function() {
    // code here
    var one = this.arr.pop();
    var menor = 0;
    if (one === undefined){
      console.log("ya no tiene argumentos");
      return -1;
    } else  {
      while(one){
          var two = this.arr.pop();
          if (two === undefined){
              console.log (one);
              return one;
          } else {
              
              if(one < two){
                  menor = one;            
              } else {
                  menor = two;
              }
              one = menor;
          }
      }
      console.log(menor);
      return menor;
    }
  } */


var stack = new MyStack;
stack.pop();    // undef
stack.push(16);  
stack.getMin(); //16
stack.pop();   //16
stack.pop();  // undefined
stack.push(50);
stack.pop();  // 50
stack.getMin();  // No tiene arg
stack.pop();   // undefined
stack.getMin();  // No tiene arg
stack.pop();  //undefined
stack.getMin();  // No tiene
stack.pop();    // Undef
stack.push(27);
stack.pop();  // 27
stack.pop();   // Undef
stack.getMin();  // No tiene arg
stack.getMin();  // No tiene arg
stack.push(30);  // No tiene arg
stack.getMin();  // 30
stack.getMin();  // 30
stack.getMin();  // 30
stack.pop();     // 30
stack.pop();     // -1
stack.pop();     // -1
stack.push(23);
stack.push(70);
stack.push(94);
stack.pop();     // 94
stack.pop();     // 70
stack.pop();     // 23
stack.push(74);