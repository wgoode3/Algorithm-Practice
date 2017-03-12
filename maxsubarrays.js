//goes through an array and returns the maximum subarray value

arr = [1,2,-4,3,-2,3,-1]
//arr = [-1,-2,-4,-3,-2,-3,-1]
//arr = [1,2,3]

function maxSubArrays(arr){
	var max = 0;
	for (var i=0; i<arr.length; i++){
		var sum = 0;
		for (var j=i; j<arr.length; j++){
			sum += arr[j];
			if (sum > max){
				max = sum;
			}
		}
	}
	return max
}

console.log(maxSubArrays(arr))