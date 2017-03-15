function removeNegatives(arr){
	for(var i=0; i<arr.length; i++){
		if(arr[i] < 0){
			for(var j=i; j<arr.length; j++){
				arr[j] = arr[j+1];
			}
			arr.length -= 1;
			i--;
		}
	}
	return arr;
}
console.log(removeNegatives([1,-1,-3,4,-6,0,12,-10]))

// no nested loops version needs some work

function rmNeg(arr){
	var removed = 0;
	for(var i=0; i<arr.length; i++){
		if(arr[i] < 0){
			arr[i] = arr[i+1+removed]
			if(arr[i] < 0){
				i--;
				removed++;
			}
		}
		console.log(arr, i, removed)
	}
	return arr;
}
// console.log(rmNeg([1,-1,4,0]))