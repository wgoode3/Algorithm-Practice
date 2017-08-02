function rSigma(num){
  if(num == 1){
    return num;
  }
  return num + rSigma(num-1);
}

// console.log(rSigma(5));

function rFactorial(num){
  if(num == 1){
    return num;
  }
  return num * rFactorial(num-1);
}

// console.log(rFactorial(4));

function rFibonacci(num){
  if(num === 0){
    return num;
  }else if(num === 1){
    return num;
  }
  return rFibonacci(num-1) + rFibonacci(num-2);
}

// console.log(rFibonacci(8));

function rBinarySearch(arr, val){
  function helper(start, end, arr, val){
    var mid = Math.floor((end-start))/2;
    if(arr[mid] == val){
      return true;
    }else if(start == end){
      return false;
    }else if(arr[mid] > val){
      return helper(mid, end, arr, val)
    }else{
      return helper(start, mid, arr, val)
    }
  }
  return helper(0, arr.length-1, arr, val);
}

// console.log(rBinarySearch([1,3,5,6], 4));
// console.log(rBinarySearch([4,5,6,8,12], 5));
