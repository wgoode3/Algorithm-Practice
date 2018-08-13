function merge(a, b){
    let i = 0, j = 0, c = [];
    if(!b){ return a; }
    while(i < a.length && j < b.length){
        if(b[j] > a[i]){
            c.push(a[i++]);
        }else{
            c.push(b[j++]);
        }
    }
    while(i<a.length){ c.push(a[i++]); }
    while(j<b.length){ c.push(b[j++]); }
    return c;
}

Array.prototype.mSort = function(){
    for(let i=0; i<this.length; i++){
        this[i] = [this[i]];
    }
    let sort = () => {
        if(this.length === 1){
            return sort[0];
        }else{
            let i=0, j=this.length-1;
            while(i < j){
                this[i] = merge(this[i++], this[j--]);
                this.length--;
            }
            return sort();
        }
    }
    return sort();
}

const { performance } = require('perf_hooks');
let start = performance.now();

let a = [12,13,2,16,3,15,7,5,9,10,4];
let answer = a.mSort();
console.log(answe);

console.log(`sort takes ${performance.now() - start} seconds`);
