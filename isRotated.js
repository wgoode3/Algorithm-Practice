// function to determine if one string is a rotated version of the other

function isRotated(str1, str2){
	// if strings are of differing length return false
	if(str1.length != str2.length){
		return false;
	}
	// look for the start of str2 within str1
	for(var i=0; i<str1.length; i++){
		if(str1[i] == str2[0]){
			var rotated = true;
			// create a temp string from str1 to compare with str2
			var temp = str1.substring(i, str1.length) + str1.substring(0, i);
			for(var j=0; j<str2.length; j++){
				if(str2[j] != temp[j]){
					rotated = false;
					break;
				}
			}
			if(rotated){
				return true;
			}
		}
	}
	return false;
}

console.log(isRotated("bingo", "ingob"));