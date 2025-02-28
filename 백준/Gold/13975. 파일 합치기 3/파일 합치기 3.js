const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const T = Number(input[0]);
let line = 1;

class PQ{
    constructor(){
        this.h = [];
    }
    size(){
        return this.h.length;
    }
    swap(idx1, idx2){
        [this.h[idx1], this.h[idx2]] =  [this.h[idx2], this.h[idx1]] 
    }
    add(v){
        this.h.push(v);
        this.bubbleU();
    }
    remove(){
        if(this.h.length === 0) return null;
        if(this.h.length ===1) return this.h.pop();

        const toRemove = this.h[0];
        this.h[0] = this.h.pop();
        this.bubbleD();
        return toRemove;
    }
    bubbleU(){
        let curIdx = this.h.length - 1;
        let pIdx = Math.floor((curIdx-1) /2);

        while(this.h[pIdx] && this.h[pIdx] > this.h[curIdx]){
            this.swap(curIdx, pIdx);
            curIdx = pIdx;
            pIdx =  Math.floor((curIdx-1) /2);
        }
    }
    bubbleD(){
        let curIdx = 0;
        let leftIdx = curIdx * 2 +1, rightIdx = curIdx *2 + 2;

        while(
            (this.h[leftIdx] && this.h[leftIdx] < this.h[curIdx])||
            (this.h[rightIdx] && this.h[rightIdx] < this.h[curIdx])
        ){
            let smallerIdx = leftIdx;
            if(this.h[rightIdx] && this.h[leftIdx] > this.h[rightIdx]) smallerIdx = rightIdx;

            this.swap(smallerIdx, curIdx);
            curIdx = smallerIdx;
            leftIdx = curIdx * 2 +1, rightIdx = curIdx *2 + 2;
        }
    }
}


const func = (arr) =>{
    const pq = new PQ();
    arr.forEach(num => pq.add(num));
    let sum =0;

    while(pq.size() >= 2){
        const n1 = pq.remove();
        const n2 = pq.remove();
        const addAns = n1 + n2;

        pq.add(addAns);
        sum += addAns;
    }
    return sum;
}

for(line; line<input.length; line++){
    const n = Number(input[line++]);
    console.log(func(input[line].split(' ').map(Number)));
}