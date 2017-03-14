// practice with some basic sorts

// bubble sort
function bubble(arr){
	for(var i=0; i<arr.length; i++){
		var changed = false;
		for(var j=1; j<arr.length-i; j++){
			if(arr[j-1] > arr[j]){
				changed = true;
				var temp = arr[j-1];
				arr[j-1] = arr[j];
				arr[j] = temp;
			}
		}
		if(!changed){
			break;
		}
	}
	return arr;
}
// console.log(bubble([5,1,2,6,4,3]))

// selection sort
function select(arr){
	for (var i=0; i<arr.length; i++){
		var min = i;
		for (var j=i+1; j<arr.length; j++){
			if (arr[j] < arr[min]){
				min = j;
			}
		}
		var current = arr[min];
		arr[min] = arr[i];
		arr[i] = current;
	}
	return arr;
}
// console.log(select([5,1,2,6,4,3]))

// insertion sort
function insert(arr){
	// start at the first unsorted value, 1
	for(var i=1; i<arr.length; i++){
		// store the value to sort in temp
		var temp = arr[i];
		// traverse the sorted values
		for(var j=0; j<i; j++){
			// check if the value is less than any of the current sorted values
			if(temp < arr[j]){
				// traverse from i backwards to j
				for(var k=i; k>j; k--){
					// overwrite the value with the previous value
					arr[k] = arr[k-1];
				}
				// put the value stored in temp into the right spot
				arr[j] = temp;
				// break out of the for loop
				break;
			}
		}
	}
	return arr;
}
console.log(insert([7,3,1,5,6,4,2]));