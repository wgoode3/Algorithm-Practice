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

// buggy floodFill

function rFloodFill(canvas, pos, color){
  var x = pos.x;
  var y = pos.y;
  var replace = canvas[y][x];
  console.log(x,y,replace, color)
  function helper(canvas, x, y, replace, color){
    if(canvas[y][x] == replace){
      canvas[y][x] = color;
      if(y+1 < canvas.length-1){
        helper(canvas, x, y+1, replace, color);
      }else if(y-1 >= 0){
        helper(canvas, x, y-1, replace, color);
      }else if(x+1 < canvas[0].length){
        helper(canvas, x+1, y, replace, color);
      }else if(x-1 >= 0){
        helper(canvas, x-1, y, replace, color);
      }
    }
  }
  return canvas;
}

canvas = [[3,2,3,4,3],
          [2,3,3,4,0],
          [7,3,3,5,3],
          [6,5,3,4,1],
          [1,2,3,3,3]];

// console.log(rFloodFill(canvas, {x:2, y:2}, 1))
