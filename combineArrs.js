function combineArrs(arr1, arr2){
	for(var i=0; i<arr1.length; i++){
		while(arr2.length>0 && arr2[0]<arr1[i]){
			var len = arr1.length-1;
			for(var j = len; j>=i; j--){
				arr1[j+1] = arr1[j];
			}
			arr1[i] = arr2[0]
			for(var j=0; j<arr2.length; j++){
				arr2[j] = arr2[j+1];
			}
			arr2.pop();
		}
	}
	while(arr2.length > 0){
		arr1.push(arr2[0]);
		for(var j=0; j<arr2.length; j++){
			arr2[j] = arr2[j+1];
		}
		arr2.pop();
	}
	return arr1
}

console.log(combineArrs([0,3,7,8], [4,6,9]))