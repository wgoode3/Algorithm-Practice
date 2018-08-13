Array.prototype.partition = function(start, end){
    let s = start, m = ((start+end)/2) >> 0, e = end;
    if(this[s] > this[e]){
        let temp = s; s = e; e = temp;
    }
    if(this[s] > this[m]){
        let temp = s; s = m; m = temp;
    }
    if(this[m] > this[e]){
        let temp = m; m = e; e = temp;
    }
    let i = start, j = end, pV = this[m];
    while(i!=j){
        while(this[i] < pV){
            i++;
        }
        while(this[j] > pV){
            j--;
        }
        let temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
    return j;
}

Array.prototype.qSort = function(){
    let sort = (start, end) => {
        if(start < end){
            let pI = this.partition(start, end);
            sort(start, pI-1);
            sort(pI+1, end);
        }
    }
    sort(0, this.length-1);
    return this;
}

const { performance } = require('perf_hooks');
let start = performance.now();

let a = [12,13,2,16,3,15,7,5,9,10,4];
a.qSort();
console.log(a);

console.log(`sort takes ${performance.now() - start} seconds`);
