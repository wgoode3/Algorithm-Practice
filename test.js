function rBinarySearch (arr, val){
    if (arr[0] === val || arr[Math.ceil(arr.length/2)] === val){
    	// if we found val return true
		return true;
	}else if (val < arr[0] || val > arr[arr.length-1] || arr.length === 1){
		// if val cannot be in the remaining values return false
        return false;
    }else if (arr[Math.ceil(arr.length/2)] < val){
    	// run binary search on the right half if val is greater than middle
		return rBinarySearch( arr.splice(Math.ceil(arr.length/2), arr.length-1), val);
	}else if (arr[Math.ceil(arr.length/2)] > val){
		// run binary search on the left half if val is less than middle
		return rBinarySearch( arr.splice(0, Math.ceil(arr.length/2)), val);
	}
}

console.log(rBinarySearch([4,5,6,8,10,11,13,15,16,17,19,20,22], 18));