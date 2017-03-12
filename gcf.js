function GCF (num1, num2){
	if (num2 < num1){
		var temp = num2;
		num2 = num1;
		num1 = temp;
	}
	if (num2%num1 === 0){
		return num1;
	}else{
		return GCF(num1, num2%num1);
	}
}

console.log(GCF(28, 18));