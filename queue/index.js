//队列是遵循FIFO（First In First Out，先进先出，也称为先来先服务）原则的一组有队列在尾部添加新元素并从顶部移除元素。最新添加的元素必须排在队列的末尾。
var items = [];
function Queue(){
  //向队列尾部添加一个（或多个）新的项
  this.enqueue = function(element){
    items.push(element)
  }
  //移除队列的第一（即排在队列最前面的）项，并返回被移除的元素。
  this.dequeue = function(){
    return items.shift()
  }
  //返回队列中第一个元素——最先被添加，
  this.front = function(){
    return items[0]
  }
  //如果队列中不包含任何元素，返回true，否则返回false。
  this.isEmpty = function(){ 
    return items.length == 0; 
  }
  //返回队列包含的元素个数，与数组的length属性类似
  this.size = function(){ 
    return items.length; 
  };
  this.print = function(){ 
    console.log(items.toString()); 
  };
}

//优先队列
function PriorityQueue() { 
  var items = []; 
  function QueueElement (element, priority){ // {1} 
    this.element = element; 
    this.priority = priority; 
  } 
  this.enqueue = function(element, priority){ 
    var queueElement = new QueueElement(element, priority); 
    if (this.isEmpty()){ 
      items.push(queueElement); // {2} 
    } else { 
      var added = false; 
      for (var i=0; i<items.length; i++){ 
        if (queueElement.priority < 
          items[i].priority){ 
          items.splice(i,0,queueElement); // {3} 
          added = true; 
          break; // {4} 
        } 
      } 
      if (!added){ //{5} 
        items.push(queueElement); 
      } 
    } 
  }; 
   //移除队列的第一（即排在队列最前面的）项，并返回被移除的元素。
  this.dequeue = function(){
    return items.shift()
  }
  //返回队列中第一个元素——最先被添加，
  this.front = function(){
    return items[0]
  }
  //如果队列中不包含任何元素，返回true，否则返回false。
  this.isEmpty = function(){ 
    return items.length == 0; 
  }
  //返回队列包含的元素个数，与数组的length属性类似
  this.size = function(){ 
    return items.length; 
  };
  this.print = function(){ 
    console.log(items.toString()); 
  };
 //其他方法和默认的Queue实现相同
}


//循环队列 击鼓传花
function hotPotato(nameList,num){
  var queue = new Queue()
  for (let i = 0; i< nameList.length; i++) {
    queue.enqueue(nameList[i])
  }
  var eliminated = ''
  while(queue.size() > 1){
    for(var i = 0;i < num;i++){
      queue.enqueue(queue.dequeue())
    }
    eliminated = queue.dequeue();
    console.log(eliminated+'在击鼓传花游戏中淘汰。')
  }
  return queue.dequeue();
}
var names = ['john','jack','camila','ingrid','carl']
var winner = hotPotato(names,7)
console.log('胜利者：' + winner);

