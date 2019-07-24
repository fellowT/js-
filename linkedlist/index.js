function LinkedList(){
  var Node = function(element){
    this.element = element;
    this.next = null;
  }
  var length = 0;
  var head = null;
  //向列表尾部添加一个新的项。
  this.append = function(element){
    var node = new Node(element),
        current;
    if(head === null){ //列表中第一个节点
      head = node
    }else{
      current = head;
      //循环列表，直到找到最后一项
      while(current.next){
        current = current.next
      }
      //找到最后一项，将其next赋为node，建立连接
      current.next = node;
    }
    length++; //更新列表的长度
  };
  //在任意位置插入一个元素
  this.insert = function(position,element){
    //检查越界值
    if(position >= 0 && position <= length){
      var node = new Node(element),
          current = head,
          previous,
          index = 0; 
      if(position === 0){
        node.next = current;
        head = node;
      }else{
        while(index++ < position){
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      length++;//更新列表的长度
      return true
    }else{
      return false
    }
  };
  //从链表中移除元素
  this.removeAt = function(position){
    if(position > -1 && position < length){
      var current = head,
          previous,
          index = 0;
      //移除第一项
      if(position === 0){
        head = current.next;
      }else{
        while(index++ < position){
          previous = current;
          current = current.next;
        }
        //将previous与current的下一项链接起来，跳过current，从而移除它
        previous.next = current.next;
      }
      length--;
      return current.element
    }else{
      return null;
    }    
  };
  this.remove = function(element){
    var index = this.indexOf(element);
    return this.removeAt(index)
  };
  //返回元素的位置，否则返回-1。
  this.indexOf = function(element){
    var current = head,
        index = -1;
    while(current){
      if(element === current.element){
        return index
      }
      index++;
      current = current.next;
    }
    return -1
  };
  this.isEmpty = function(){
    return length === 0;
  };
  this.size = function(){
    return length;
  };
  //把LinkedList对象转换成一个字符串
  this.toString = function(){
    var current = head,
        string = '';
    while(current){
      string += current.element;
      current = current.next;
    }
    return string;
  };
  this.getHead = function(){ 
    return head; 
  };
}

//双向链表
//在双向链表中，链接是双向的：一个链向下一个元素，另一个链向前一个元素，

function DoublyLinkedList(){
  var Node = function(element){
    this.element = element;
    this.next = null;
    this.prev = null;
  }
  var length = 0;
  var head = null;
  var tail = null;
  this.insert = function(position, element){
    //检查越界值
    if(position >= 0 && position <= length){
      var node = new Node(element);
      var current = head;
      var previous;
      var index = 0;
      if(position === 0){ //在第一个位置添加
        if(!head){
          head = node;
          tail = node;
        }else{
          node.next = current;
          current.prev = node;
          head = node;
        }
      }else if(position === length){ //最后一项
        current = tail;
        current.next = node;
        node.prev = current;
        tail = node;
      }else{
        while(index++ < position){
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
        current.prev = node;
        node.prev = previous
      }
      length++;
      return true
    }else{
      return false
    }
  }
  this.removeAt = function(position){
    //检查越界值
    if(position > -1 && position < length){
      var current = head,
          previous,
          index = 0;
      //移除第一项
      if(position === 0){
        head = current.next;
        //如果只有一项，更新tail
        if(length === 1){
          tail = null;
        }else{
          head.prev = null;
        }
      }else if(position === length-1){//最后一项
        current = tail;
        tail = current.prev;
        tail.next = null;
      }else{
        while(index++ < position){
          previous = current;
          current = current.next;
        }
        //将previous与current的下一项链接起来一一跳过current
        previous.next = xurrent.next;
        current.next.prev = previous
      }
      length--;
      return current.element;
    }else{
      return null;
    }
  }
}