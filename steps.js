function steps(num){
	var array = [];
	function helper(num, arr){
		if(num >= 1){
			arr.push(1)
			helper(num-1, arr)
		}
		if(num>=2){
			arr.push(2)
			helper(num-2, arr)
		}
		if(num==0){
			array.push(arr);
		}
	}
	helper(num, []);
		return array;
}

console.log(steps(5));