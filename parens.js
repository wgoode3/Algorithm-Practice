// recursive function takes a number and returns an array of every combination of parenthesis

function nPairsParens (num) {
	var arr = [];
	if (num < 1) {
		return arr;
	}
	helper(num-1, 1, '(', arr);
	return arr;
}

function helper (num, open, str, arr) {
	if (num + open === 0) {
		arr.push(str);
		return arr;
	} else if (num === 0) {
		helper(num, open-1, str+')', arr);
	} else {
		helper(num-1, open+1, str+'(', arr);
		if (open > 0) {
			helper(num, open-1, str+')', arr);
		}
	}
}

console.log(nPairsParens(3)); 
// should return [ '((()))', '(()())', '(())()', '()(())', '()()()' ]
 
