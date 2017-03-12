function strSubset(str){
	var arr = [];
	strSubsetHelper(str, "", arr);
	return arr;
}

function strSubsetHelper(str, substr, arr){
	if(str === ""){
		arr.push(substr);
	} else {
		strSubsetHelper(str.substring(1), substr, arr );
		strSubsetHelper(str.substring(1), substr += str[0], arr);
	}
}

console.log(strSubset("abcd"))