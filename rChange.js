function genCoinChange(cents){
	arr = [];
	helper(cents, 0, 0, 0, 0, arr);
	return arr;
}

function helper(cents, q, d, n, p, arr){
	if(cents === 0){
		arr.push({quarters:q, dimes:d, nickels:n, pennies:p});
		return arr;
	}
	if(cents > 24 && d <= q && n <= q && p <= q){
		helper(cents-25, q+1, d, n, p, arr);
	}
	if(cents > 9 && n <= d && p <= d){
		helper(cents-10, q, d+1, n, p, arr);
	}
	if(cents > 4 && p <= n){
		helper(cents-5, q, d, n+1, p, arr);
	}
	if(cents > 0){
		helper(cents-1, q, d, n, p+1, arr);
	}
}

console.log(genCoinChange(51));