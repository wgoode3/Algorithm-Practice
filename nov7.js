
// algorithm practice from Nov. 7, 2016


//returns the sum of all numbers from 1 to the val
function smartSum(val){
	return val*(val+1)/2
}
//haha one liner!

//console.log(smartSum(12))

//factorial function with some basic caching 
function fastFactorial(val){
	var arr = [0, 1];
	for (var i=0; i<arr.length; i+=2){
		if (val === arr[i]){
			return arr[i+1]
		}
	}
	var fac = 1
	for (var i=1; i<val+1; i++){
		fac *= i;
	}
	arr.push(val);
	arr.push(fac);
	return fac
}

//console.log(fastFactorial(12))

//fibonacci function with some basic caching
function fancyFibonacci(num){
	var arr = [0, 0, 1, 1];
	for (var i=0; i<arr.length; i+=2){
		if (num === arr[i]){
			return arr[i+1]
		}
	}
	var x = 0;
	var y = 1;
	for (var i=2; i<=num; i++){
		var sum = x + y;
		x = y;
		y = sum;
	}
	arr.push(num);
	arr.push(y);
	return y
}

//console.log(fancyFibonacci(12))