//栈 先进后出 first in last out
var items = []
function Stack(){
  //添加一个（或几个）新元素到栈顶
  this.push = function(element){
    items.push(element)
  }
  //移除栈顶的元素，同时返回被移除的元素。
  this.pop = function(){
    return items.pop()
  }
  //返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的元素，仅仅返回它）
  this.peek = function(){ 
    return items[items.length-1]; 
  };
   //如果栈里没有任何元素就返回true，否则返回false。
  this.isEmpty = function(){ 
    return items.length == 0; 
  };
   //返回栈里的元素个数。这个方法和数组的length属性很类似
  this.size = function(){ 
    return items.length; 
  };
   //移除栈里的所有元素。
  this.clear = function(){ 
    items = []; 
  };
   //检查栈里的内容
  this.print = function(){ 
    console.log(items.toString()); 
  };
}
// var stack = new Stack();


//十进制转二进制
function divideBy2(decNumber){
  var remStack = new Stack(),
      rem,
      binaryString = '';
  while(decNumber > 0){
    rem = Math.floor(decNumber % 2)
    remStack.push(rem);
    decNumber = Math.floor(decNumber / 2)
  }
  while(!remStack.isEmpty){
    binaryString += remStack.pop().toString()
  }
  return binaryString
}

//十进制转任何进制
function baseConverter(decNumber, base){ 
  var remStack = new Stack(), 
  rem, 
  baseString = '', 
  digits = '0123456789ABCDEF'; //{6} 
  while (decNumber > 0){ 
    rem = Math.floor(decNumber % base); 
    remStack.push(rem); 
    decNumber = Math.floor(decNumber / base); 
  } 

  while (!remStack.isEmpty()){ 
    baseString += digits[remStack.pop()]; //{7} 
  } 
  return baseString; 
}

console.log(baseConverter(100345, 16))