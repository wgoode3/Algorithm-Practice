function anagrams(str){
	var arr = [];
	for(var i=0; i < str.length; i++){
		var a = str[i];
		var b = str.substring(0, i)+str.substring(i+1);
		helper(arr, a, b); 
	}
  return arr;
}

function helper(arr, a, b){
	if(b.length === 0){
		return arr;
	}
	for(var i=0; i < b.length; i++){
        arr.push(b+a);
        a += b[i];
		b = b.substring(0, i)+b.substring(i+1);
		helper(arr, a, b);
	}
}

console.log(anagrams('lim'));