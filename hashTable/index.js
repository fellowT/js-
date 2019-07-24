function HashTable(){
  var table = [];
  var loseloseHashCode = function(key){
    var hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37
  }
  this.put = function(key,value){
    var position = loseloseHashCode(key);
    if(table[position] == undefined){
      table[position] = new LinkedList()
      table[position].append(new ValuePair(key, value)); //{2}
    }
    table[position] = value
  }
  this.get = function(key){
    var position = loseloseHashCode(key)
    if(table[position] !== undefined){
      //遍历链表寻找键值
      var current = table[position].getHead();
      while(current.next){
        if(current.element.key === key){
          return current.element.value;
        }
        current = current.next
      }
      //检查元素在链表第一个或最后一个节点的情况
      if(current.element.key === key){
        return current.element.next
      }
    }
    return undefined
  }
  this.remove = function(key){
    var position = loseloseHashCode(key);
    if(table[position] !== undefined){
      var current = table[position].getHead();
      while(current.next){
        if(current.element.key === key){
          table[position].remove(current.element);
          if(table[position].isEmpty()){
            table[position] = undefined
          }
          return true
        }
        current = current.next
      }
      //检查是否为第一个或最后一个元素
      if(current.element.key == key){
        table[position].remove(current.element)
          if(table[position].isEmpty()){
            table[position] = undefined
          }
          return true
      }
    }
    return false
  }
}

var ValuePair = function(key, value){
  this.key = key;
  this.value = value;
  this.toString = function(){
    return '[' + this.key + '-' + this.value + ']'
  }
}

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
