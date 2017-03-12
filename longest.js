function longestWord(str){
	var temp = "";
	var longest = "";

	str += " ";

	function check(letter){
		var punctuation = ['.', '!', '?', ',', ':', ';'];
		for(var i=0; i<punctuation.length; i++){
			if(letter === punctuation[i]){
				return false;
			}
		}
		return true;
	}

	for( var i=0; i<str.length; i++){
		if(str[i] !== " " && check(str[i])){
			temp += str[i];
		}else {
			if(temp.length > longest.length){
				longest = temp;
			}
			temp = "";
		}
	}
	return longest;
}

console.log(longestWord('Anne, is Great!'));
