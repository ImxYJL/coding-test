// 1753번 하던거...
const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

// 정점, 간선의 개수
const [v, e] = input[0].split(' ').map(Number);
const sv = Number(input[1]);

const adj = Array.from({ length: v+1 }, () => []);
const d = Array.from({length: v+1}, () => Infinity);

for(let i=2; i<input.length; i++){
    // u에서 v로 가는 가중치 w인 간선
    const [u, v, w] = input[i].split(' ').map(Number);
    adj[u].push([w,v]);
}

class MinHeap {
    constructor() {
        this.h = [];
    }
    size() {
        return this.h.length;
    }
    swap(idx1, idx2) {
        [this.h[idx1], this.h[idx2]] = [this.h[idx2], this.h[idx1]];
    }
    add(v) {
        this.h.push(v);
        this.bubbleU(); // push로 맨 뒤에 추가했기 때문에 더했을 때는 올라가야 함!
    }
    remove() {
        if (this.h.length === 0) return null;
        if (this.h.length === 1) return this.h.pop();

        const toRemove = this.h[0];
        this.h[0] = this.h.pop();
        this.bubbleD(); 
        return toRemove;
    }

    bubbleU() {
        let idx = this.h.length - 1;
        let pIdx = Math.floor((idx - 1) / 2);

        while (
            this.h[pIdx] &&
            this.h[idx][0] < this.h[pIdx][0]
        ) {
            this.swap(idx, pIdx);
            idx = pIdx;
            pIdx = Math.floor((idx - 1) / 2);
        }
    }

    bubbleD() {
        let idx = 0;
        let leftIdx = idx * 2 + 1;
        let rightIdx = idx * 2 + 2;

        while (
            (this.h[leftIdx] && this.h[leftIdx][0] < this.h[idx][0]) ||
            (this.h[rightIdx] && this.h[rightIdx][0] < this.h[idx][0])
        ) {
            let smallerIdx = leftIdx;
            if (
                this.h[rightIdx]  &&
                this.h[rightIdx][0] < this.h[smallerIdx][0]
            ) {
                smallerIdx = rightIdx;
            }

            this.swap(idx, smallerIdx);
            idx = smallerIdx;
            leftIdx = idx * 2 + 1;
            rightIdx = idx * 2 + 2;
        }
    }
}

const pq = new MinHeap();
d[sv] = 0;
// 우선순위 큐에 0(가중치), 시작점 추가
pq.add([d[sv], sv]); 

while(pq.size() >0){
    const cur = pq.remove();
    // 현재 가중치 최소값이 최단거리 테이블의 값과 같은가?
    if(d[cur[1]] !== cur[0]) continue;
    //console.log(adj[cur[1]]);    
    adj[cur[1]].forEach((next) =>{
        // 가중치가 더 작은 것을 찾은 경우에만 갱신
       if(d[next[1]] <= d[cur[1]] + next[0]) return; 
        d[next[1]] = d[cur[1]] + next[0];
        pq.add([d[next[1]], next[1]]);
    });
}

for(let i=1; i<=v; i++){
    if(d[i] === Infinity) console.log("INF");
    else console.log(d[i]);
}