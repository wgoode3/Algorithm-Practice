// the Minh optimised version

function BSE(str){
	arr = [];
	helper(str, 0, arr);
	return arr;
}

function helper(str, i, arr){
	if (i >= str.length-1){
		arr.push(str);
	} else {
		while(str[i] != "?" || i === str.length-1){
			i++
		};
		alt = str.substring(0,i)+0+str.substring(i+1);
		str = str.substring(0,i)+1+str.substring(i+1);
		i++;
		helper(alt, i, arr);
		helper(str, i, arr);
	}
}

console.log(BSE("1?10?"));

// function BSE(str){
//     arr = [];
//     helper(str, 0, arr);
//     return arr;
// }function helper(str, i, arr){
//     if (i >= str.length-1){
//         arr.push(str);
//     } else if (str[i] === "?"){
//         var alt = str;
//         alt = str.substring(0,i)+0+str.substring(i+1);
//         str = str.substring(0,i)+1+str.substring(i+1);
//         i++;
//         helper(alt, i, arr);
//         helper(str, i, arr);
//     } else {
//         i++;
//         helper(str, i, arr);
//     }
// }console.log(BSE("1?1??"));