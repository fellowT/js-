//集合

function Set(){
  var items = {};
  this.has = function(value){
    return items.hasOwnProperty(value)
  };
  this.add = function(value){
    if(!this.has(value)){
      items[value] = value;
      return true
    }
    return false
  };
  this.remove = function(value){
    if(this.has(value)){
      delete items[value]
      return true
    }
    return false
  };
  this.clear = function(){
    items = {}
  };
  this.size = function(){
    return Object.keys(items).length
  };
  this.sizeLegacy = function(){
    var count = 0;
    for(var prop in items){
      if(items.hasOwnProperty(prop)){
        ++count
      }
    }
    return count
  };
  this.values = function(){
    return Object.keys(items);
  };
  this.valueLegacy = function(){
    var keys = [];
    for(var key in items){
      keys.push(key)
    }
    return keys
  };
  //并集
  this.union = function(otherSet){
    var uniconSet = new Set();
    var values = this.values();
    for(var i = 0; i < values.length; i++){
      uniconSet.add(values[i])
    }
    values = otherSet.values();
    for(var i = 0; i < values.length; i++){
      uniconSet.add(values[i])
    }
    return uniconSet
  }
  //交集
  this.intersection = function(otherSet){
    var intersectionSet = new Set();
    var values = this.values();
    for (let i = 0; i < values.length; i++) {
      if(otherSet.has(values[i])){
        intersectionSet.add(values[i])
      }
    }
    return intersectionSet
  }
  //差集
  this.difference = function(otherSet){
    var differenceSet = new Set();
    var values = this.values;
    for (let i = 0; i < values.length; i++) {
      if(!otherSet.has(values[i])){
        differenceSet.add(values[i])
      }
    }
    return differenceSet
  }
  //子集
  this.subset = function(otherSet){
    if(this.size() > otherSet.size()){
      return false
    }else{
      var values = this.values();
      for (let i = 0; i < values.length; i++) {
        if(!otherSet.has(values[i])){
          return false
        }
      }
      return true
    }
  }
}
