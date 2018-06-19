function pascal(n){
    prev = [1];
    current = [1, 1];
    console.log(prev);
    for(var i=2; i<n+1; i++){
      prev = current;
      current = [];
      for(var j=0; j<i; j++){
        if(j === 0 || j === i-1){
          current.push(1);
        }else{
          current.push(prev[j-1]+prev[j])
        }
      }
      console.log(current);
    }
  }
  
  pascal(10);