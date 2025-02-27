const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

class PQ{
    constructor(){
        this.h = [];
    }
    size(){
        return this.h.length;
    }
    swap(idx1, idx2){
        [this.h[idx1], this.h[idx2]] = [this.h[idx2], this.h[idx1]];
    }
    add(v){
        this.h.push(v);
        this.bubbleU();
    }
    remove(){
        if(this.h.length === 0) return null;
        if(this.h.length === 1) return this.h.pop();
        
        const toRemove= this.h[0];
        this.h[0] = this.h.pop();
        this.bubbleD();
        return toRemove;
    }
    bubbleU(){
        let curIdx = this.h.length - 1;
        let pIdx = Math.floor((curIdx-1)/2);

        while(
            this.h[pIdx] && this.h[pIdx] > this.h[curIdx]
        ){ 
            this.swap(pIdx, curIdx);
            curIdx = pIdx;
            pIdx = Math.floor((curIdx -1)/2);
        }
    }
    bubbleD(){
        let curIdx = 0;
        let leftIdx = curIdx * 2 + 1;
        let rightIdx = curIdx * 2 + 2;
        while(
            (this.h[leftIdx] && this.h[leftIdx] < this.h[curIdx]) || 
             (this.h[rightIdx] && this.h[rightIdx] < this.h[curIdx])
        ){
            let smallerIdx = leftIdx;
            if(this.h[rightIdx] && this.h[rightIdx] < this.h[smallerIdx]) smallerIdx = rightIdx;

            this.swap(smallerIdx, curIdx);
            curIdx = smallerIdx;
            leftIdx = curIdx * 2 + 1, rightIdx = curIdx * 2 + 2;
        }
    }
}

const pq = new PQ();
const n = Number(input[0]);
for(let i=1; i<input.length; i++){
    const tmp = Number(input[i]);
    pq.add(tmp);
}

let sum = 0;
while(pq.size() > 1){
    const num1 = pq.remove();
    const num2 = pq.remove();
    const tmpSum = num1 + num2;
    sum += tmpSum;
    pq.add(tmpSum);
}
console.log(sum);