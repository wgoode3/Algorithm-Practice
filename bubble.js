function bubbleSort(arr){
	var temp, has_changed, i, j;
	for(i=0; i<arr.length-1; j++){
		has_changed = false;
		for(j=1; j<arr.length-i;j++){
			if(arr[j-1]>arr[j]){
				has_changed = true;
				temp = arr[j];
				arr[j] = arr[j-1];
				arr[j-1] = temp;
			}
		}
		if(!has_changed){
			return arr;
		}
	}
	return arr;
}

console.log(bubbleSort([5,4,3,2,1]));