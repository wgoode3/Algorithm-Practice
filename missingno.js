//finds the missing number in an array
//example [2,-4,0,-3,-2,1] returns -1

function MissingNo(arr){
	var max = arr[0];
	var min = arr[0];
	for (var i=1; i<arr.length; i++){
		if (arr[i] > max ){
			max = arr[i];
		}
		if (arr[i] < min){
			min = arr[i];
		}
	}
	for (var k=min; k<max; k++){
		var flag = false;
		for (var j=0; j<arr.length; j++){
			if (arr[j]===k){
				flag = true;
			}
		}
		if (!flag){
			return k
		}
	}
}

console.log(MissingNo([2,-4,0,-3,-2,1]))