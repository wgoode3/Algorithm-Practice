String.prototype.hashed = function(){
    let hash = 0;
    for(i=0; i<this.length; i++){
        var char = this.charCodeAt(i);
        hash = ((hash<<5)-hash) + char;
        hash &= hash;                
    }
    return hash;
}

class HashMap{
    constructor(){
        this.capacity = 3;
        this.hashMap = []
        this.hashMap.length = this.capacity;
    }

    put(key, val){
        let h = key.hashed() % this.capacity;
        
        if(this.hashMap[h]){
            
            // check if the key already exists
            for(let i in this.hashMap[h]){
                if(this.hashMap[h][i][0] === key){
                    this.hashMap[h][i][1] = val;
                    return this;
                }
            }
            // if not then add it in
            this.hashMap[h].push([key, val]);

            // check if we should grow the capacity
            if(this.hashMap[h].length > 0.74*this.capacity){
                this._grow();
            }

        }else{
            this.hashMap[h] = [[key, val]];
        }
        return this;
    }

    get(key){
        let h = key.hashed() % this.capacity;
        if(this.hashMap[h].length === 0){
            return;
        }else if(this.hashMap[h].length === 1){
            return this.hashMap[h][0][1];
        }else{
            for(let i in this.hashMap[h]){
                if(this.hashMap[h][i][0] === key){
                    return this.hashMap[h][i][1];
                }
            }
        }
    }

    _grow(){
        // grow the hashMap by increasing the capacity by 50%
        this.capacity = (this.capacity * 1.5) >> 0;
        // create a temp hashMap
        let temp = [];
        temp.length = this.capacity;
        for(let arr of this.hashMap){
            if(arr){
                for(let kvpair of arr){
                    // re-hash all of the keys
                    let h = kvpair[0].hashed() % this.capacity;
                    // re-put the key value pairs
                    if(temp[h]){
                        temp[h].push([kvpair[0], kvpair[1]]);
                    }else{
                        temp[h] = [[kvpair[0], kvpair[1]]];
                    }
                }
            }
        }
        // overwrite the hashMap with the temp hashMap
        this.hashMap = temp;
    }

}

const h = new HashMap();
h.put('name', 'Will').put('email', 'wgoode@codingdojo.com');
h.put('num', 12).put('lang', 'Python').put('color', 'green');
console.log(h.hashMap);
h.put('lang', 'Java');
console.log(h.hashMap);
h.put('1', 1).put('2', 2).put('3', 3).put('4', 4).put('5', 5).put('6', 6);
console.log(h.hashMap);
