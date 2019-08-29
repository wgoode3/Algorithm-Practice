function removeDupes(arr) {
  var countToPop = 0;
  var currentPos = 0;
  for(var i=1; i<arr.length; i++) {
    if(arr[i] === arr[currentPos]) {
      countToPop++;
    } else {
      arr[++currentPos] = arr[i];
    }
  }
  arr.length -= countToPop;
  return arr;
}

console.log(removeDupes([1,1,1,2,3,4,4,5,6,6]));
// expect to get back [1,2,3,4,5,6]
