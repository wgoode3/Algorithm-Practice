function Node(val){
  this.val = val;
  this.node = null;
}

function SLL(){
  this.head = null;
  this.add = function(val){
    var runner = this.head;
    if(!runner){
      this.head = new Node(val);
      return this
    }
    while(runner.next){
      runner = runner.next;
    }
    runner.next = new Node(val);
    return this
  }
  this.length = function(){
  	var length = 0, runner = this.head;
  	while(runner){
  		length++;
  		runner = runner.next;
  	}
  	return length;
  }
  this.isPalindrome = function(){
  	var runner = this.head;
  	if(!runner || !runner.next){
  		return true;
  	}
  	var length = this.length();
  	var start = runner;
  	for(var i=0; i<Math.floor((length-1)/2); i++){
  	  for(var j=i; j<length-i-1; j++){
  		runner = runner.next;
  	  }
  	  console.log('here', start.val, runner.val);
  	  if(start.val != runner.val){
  		return false;
  	  }
  	  start = start.next;
  	  runner = start;
  	}
  	return true;
  }
  this.reverse = function(){
  	var current = this.head, prev = null;
  	while(current){
  		var temp = current.next;
  		current.next = prev;
  		prev = current;
  		current = temp;
  	}
  	this.head = prev;
  	return this;
  }
  this.print = function(){
  	var arr = [], runner = this.head;
  	while(runner){
  		arr.push(runner.val);
  		runner = runner.next;
  	}
  	return arr;
  }
}