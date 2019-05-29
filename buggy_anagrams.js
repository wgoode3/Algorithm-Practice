function anagrams(str){
	var arr = [];
	for(var i=0; i < str.length; i++){
		var a = str[i];
		var b = str.substring(0, i)+str.substring(i+1);
		helper(arr, a, b); 
	}
  return arr;
}

function helper(arr, pre, str){
	if(str.length === 0){
	    arr.push(pre+str); // or just (pre)!
	}
	else {
		for(var i=0; i < str.length; i++){
	        var a = str[i];
			var b = str.substring(0, i)+str.substring(i+1);
			helper(arr, pre+a, b);
		}
	}
}

//function helper(arr, a, b){
//	if(b.length === 0){
//		return arr; // right idea, but you never use what gets returned
//	}
//	for(var i=0; i < b.length; i++){
//        arr.push(b+a);
//        a += b[i]; // you want a (or something) to be a single char through the loop
//		  b = b.substring(0, i)+b.substring(i+1); // because b changes, so does b.length
//	 	  helper(arr, a, b);
//	}
//}

console.log(anagrams('lim'));

