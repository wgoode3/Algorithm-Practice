// find if an array is inside a larger matrix

matrix = [[12,34,45,56], [78,87,76,65],[56,67,78,89],[54,43,32,21]];
arr = [[67,78],[43,32]];

function matrixSearch(matrix, arr){
  var flag = false;
  var loc = [-1,-1];
    for(var i = 0; i < matrix.length; i++){
      for(var j =0; j<matrix[i].length; j++){
        if (arr[0][0] === matrix[i][j]){
        flag = true;  
        loc= [i,j];
          for(var k=0; k<arr.length; k++){
            for(var l=0; l<arr[k].length; l++){
              if(arr[k][l] !== matrix[i+k][j+l]){
              flag = false;
              loc = [-1,-1];
              }
            }
          }
        }
      }
    }
  return [flag, loc]
}

console.log(matrixSearch(matrix, arr));