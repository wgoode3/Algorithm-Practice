function selectSort(arr){
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

		// var temp = arr[i];
		// var temp2 = arr[min];
		// console.log(temp, temp2);
		// for (var j=i; j<min; j++){
		// 	arr[j] = temp;
		// 	temp = arr[j+1];
		// }
		// arr[i] = temp2;
	}
	return arr;
}

console.log(selectSort([5,3,7,1,2,10,-1]));