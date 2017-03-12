
function BinarySearch(arr, val){
  console.log(arr);
  var mid = Math.ceil((arr.length-1)/2);
  if (arr[mid] === val){
    console.log(mid);
    return mid
  }
  while (arr[mid] !== val){
    if (val > arr[mid]){
      mid += Math.ceil(mid/2);
    }else if (val < arr[mid]){
      mid -= Math.ceil(mid/2);
    }else if(arr[mid] === val){
      console.log(mid);
      return mid
    }
    if (arr[mid-1] < val && val < arr[mid]){
      console.log('false');
      return false
    }else if (arr[mid+1] > val && val > arr[mid]){
      console.log('false');
      return false
    }
  }
}


BinarySearch([1,2,3,4,5,6], 5)

