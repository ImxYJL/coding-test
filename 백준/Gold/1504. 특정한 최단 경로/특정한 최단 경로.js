const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');
const [n, e] = input[0].split(' ').map(Number);
const adj = Array.from({length: n+1}, () => []);

class PQ{
    constructor(){
        this.h = [];
    }
    size(){
        return this.h.length;
    }
    swap(idx1, idx2){
        [this.h[idx1], this.h[idx2]] =   [this.h[idx2], this.h[idx1]]; 
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
        let pIdx = Math.floor((curIdx-1)/2);

        while(
            this.h[pIdx] && this.h[pIdx] > this.h[curIdx]
        ){
            this.swap(pIdx, curIdx);
            curIdx = pIdx;
            pIdx = Math.floor((curIdx-1)/2);
        }
    }
    bubbleD(){
        let curIdx = 0;
        let leftIdx = curIdx * 2 + 1, rightIdx = curIdx * 2 + 2;
        while(
            (this.h[leftIdx] && this.h[leftIdx] < this.h[curIdx]) ||
            (this.h[rightIdx] && this.h[rightIdx] < this.h[curIdx])
        ){
            let smallerIdx= leftIdx;
            if(this.h[rightIdx] && this.h[rightIdx] < this.h[smallerIdx]) smallerIdx = rightIdx;

            this.swap(smallerIdx, curIdx);
            curIdx = smallerIdx;
            leftIdx = curIdx * 2 + 1, rightIdx = curIdx * 2 + 2;
        }
    }
}

const getDis = (startV, endV) =>{
    const pq = new PQ();
    const dist = Array.from({length: n+1}, () => Infinity); // 조심!
    
    dist[startV] = 0; // 매번 초기화되는거 어캄 ? 저장해놔야지...
    pq.add([startV, dist[startV]]);

    while(pq.size() >0){
        const [curV, curW] = pq.remove();
        if(dist[curV] !== curW) continue;
        
        adj[curV].forEach(v =>{
            const [nextV, nextW] = v;
            const tmpW = nextW + dist[curV];
            if(tmpW >= dist[nextV]) return; // 이거때문인가?

            dist[nextV] = tmpW;
            pq.add([nextV, dist[nextV]]);
        });
    } 
    return dist[endV] // 이게 포인트!
};

for(let i=1; i<input.length -1; i++){
    const [u, v, w] = input[i].split(' ').map(Number);
    adj[u].push([v, w]);
    adj[v].push([u, w]);
}

// 복신?


const [v1, v2] = input[input.length-1].split(' ').map(Number);
// v1먼저 1번, v2먼저 2번 해서 총 2개 경로 만들기
// 둘 다 -1이면 마지막으로 -1 출력하기

const v1Dist = getDis(1, v1) + getDis(v1, v2) + getDis(v2, n);
const v2Dist = getDis(1, v2) + getDis(v1, v2) + getDis(v1, n); // v1~v2는 무향이라 사실상 같을
const min = Math.min(v1Dist, v2Dist);

console.log(min >= Infinity ? -1 : min);