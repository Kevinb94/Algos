class HashTable {
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key){
        let hash = 0;

        for(let i=0; i < key.length; i++){
            hash= (hash + key.charCodeAt(i) + i) % this.data.length;
        }
        return hash;
    }

    set(key, value){
        let address = this._hash(key);
        // console.log("Address: " + address);
        if(!this.data[address]){
            this.data[address] = [];
    
        }
        this.data[address].push([key, value]);     
        // console.log(this.data);  
        return this.data;
    }

    get(key){
        let address = this._hash(key);

        const currentBucket = this.data[address];
        if(currentBucket.length){
            for(let i=0;i<currentBucket.length;i++){
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }
}

const myHashTable = new HashTable(10);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 554);
console.log(myHashTable.get('apples'))