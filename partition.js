function arrPartition(arr){
	var x = arr[0];
	for(var i=0; i<arr.length; i++){
		if(arr[i]<x){
			var j=0;
			while(arr[j]<x){
				j++;
			}
			var temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}
	return j+1;
}

var arr = [5,4,9,2,5,3]; 
console.log(arrPartition(arr), arr); // expect 3 [4,2,3,5,5,9]

// function arrPartition2(arr){
// 	// need to find the median of the first, last and middle values
// 	var find_median = [arr[0], arr[arr.length-1], arr[Math.floor((arr.length-1)/2)]]

	
	
// 	for(var i=0; i<arr.length; i++){
// 		if(arr[i]<x){
// 			var j=0;
// 			while(arr[j]<x){
// 				j++;
// 			}
// 			var temp = arr[i];
// 			arr[i] = arr[j];
// 			arr[j] = temp;
// 		}
// 	}
// 	return j+1;
// }

// arrPartition2(arr);

//need to rewrite partition to accept a start and end point

function quickSort(arr){
	function helper(index1, index2, arr){
		if(index2-index1 <= 1){
			return arr;
		}
		var b = arrPartition(arr, index1, index2)
		helper(index1, b-1, arr);
		helper(b+1, index2, arr);
	}
}