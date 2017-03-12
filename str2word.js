
// function to return an array of all words in a string
function str2word (str) {
	
	// start off with an empty array and an empty string
	var arr = [],
		word = "";

	// adding a blank space at the end makes sure I get the last word back
	str += " ";
	
	// helper to check if a letter is punctuation
	function check(letter){
		// array containing whatever I happened to consider punctuation at the time
		var puncutation = [".", "!", "?", ",", ":", ";", "'", '"', "(", ")", "[", "]", "`", "~", "/", "-"];
		for ( var i = 0; i < puncutation.length; i++ ){
			// if the letter matches some punctuation return true
			if ( letter === puncutation[i] ){
				return true;
			}
		}
		// if letter didn't match any punctuation return false
		return false;
	}
	
	// go through the entire string and build up an array of words
	for ( var i = 0; i < str.length; i++ ){
		if ( check( str[i]) ) {
			// if it's punctuation do nothing
		} else if ( str[i] !== " " ) {
			// if it's not a space or punctuation we want to add it to the variable word
			word += str[i];
		} else {
			// if we hit a space check if we have a word
			if ( word.length > 0 ) {
				// if we have a word (block of characters longer than 0) then add it to our array and reset the variable word
				arr.push(word);
				word = "";
			}
		}
	} 
	// return an array with all the words in it
	return arr;
}

console.log(str2word('"this" /is/ :a: !test! -- Or is it?'));
// returns [ 'this', 'is', 'a', 'test', 'Or', 'is', 'it' ]


//function to find the longest word
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


// function to return a reversed array!
function reverseOrder(str){
	var arr = str2word(str);
	var newstr = "";
	for(var i=0; i<arr.length; i++){
		newstr += arr[arr.length-1-i];
		if(i < arr.length-1){
			newstr += " ";
		}
	}
	return newstr;
}

console.log(reverseOrder("this is a test I think"))
