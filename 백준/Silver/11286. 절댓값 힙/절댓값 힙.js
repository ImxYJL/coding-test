const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

class PQ{
    constructor(){
        this.h = [];
    }
    // 1. 절댓값이 작은 것 2. 절댓값이 같은 경우 더 작은 것
    isLeftGreater(v1, v2){
        const tmp1 = Math.abs(v1), tmp2 = Math.abs(v2);
        if(tmp1 === tmp2) return v1 > v2; 
        return tmp1 > tmp2; 
        
    }
    size(){
        return this.h.length;
    }
    swap(idx1, idx2){
        [this.h[idx1], this.h[idx2]] = [this.h[idx2], this.h[idx1]]
    }
    add(v){
        this.h.push(v);
        this.bubbleU();
    }
    remove(){
        if(this.h.length === 0) return null;
        if(this.h.length === 1) return this.h.pop();
        
        const toRemove = this.h[0];
        this.h[0] = this.h.pop();
        this.bubbleD();
        return toRemove;
    }
    bubbleU(){
        let curIdx = this.h.length - 1;
        let pIdx = Math.floor((curIdx - 1)/2);

        while(
            this.h[pIdx] && this.isLeftGreater(this.h[pIdx], this.h[curIdx])
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
            (this.h[leftIdx] && this.isLeftGreater(this.h[curIdx],this.h[leftIdx])) || 
            (this.h[rightIdx] && this.isLeftGreater(this.h[curIdx],this.h[rightIdx]))
        ){
            let smallerIdx = leftIdx;
            // 우선순위가 더 낮은 경우 swap
            if(this.h[rightIdx] && this.isLeftGreater(this.h[smallerIdx], this.h[rightIdx])) smallerIdx = rightIdx;
            
            this.swap(smallerIdx, curIdx);
            curIdx = smallerIdx;
            leftIdx = (curIdx) * 2 + 1;
            rightIdx = (curIdx) * 2 + 2;
        }
    }
}

const n = Number(input[0]);
const pq = new PQ();
const ans= [];

for(let i=1; i<input.length; i++){
    const cmd = Number(input[i]);

    if(cmd === 0){
        const tmp = pq.remove();
        ans.push(tmp === null ? '0' : String(tmp));
    }else{
        pq.add(cmd);
    }
}

console.log(ans.join('\n'));