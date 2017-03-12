function insertionSort(arr){
	// if(arr[0]>arr[1]){
	// 	var temp = arr[0];
	// 	arr[0] = arr[1];
	// 	arr[1] = temp;
	// }
	console.log('the function starts', arr);
	for(var i=0; i<arr.length-1; i++){
		console.log('current sorted length is', i+1);
		var newplace = i+1;
		for(var j=i; j>=0; j--){
			if( arr[j] > arr[i+1]){
				newplace = j;
				console.log('new index is set', newplace);
			}
		}
		if(i+1 != newplace){
			// var temp = arr[newplace]
			// arr[newplace] = arr[i+1] //move the unsorted value to the right position
			// var save = arr[i];
			// for(var k=newplace+1; k<i+1; k++){
			// 	arr[k] = temp;
			// 	temp = arr[k+1]
			// }
			// arr[i+1] = save;
			var temp = arr[newplace];
			arr[newplace] = arr[i+1];
			for(var k=newplace+1; k<i+2; k++){
				arr[k] = temp;
				temp = arr[k+1]
			}
			console.log('gone through the array', i+1, 'times', 'and the array is', arr);
		}
	}
	return arr;
}

console.log(insertionSort([7,3,1,5,6,4,2]));