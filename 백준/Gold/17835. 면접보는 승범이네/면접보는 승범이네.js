const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

class PQ {
    constructor() {
        this.h = [];
    }
    size() {
        return this.h.length;
    }
    swap(i, j) {
        [this.h[i], this.h[j]] = [this.h[j], this.h[i]];
    }
    add(v) {
        this.h.push(v);
        this.bubbleU();
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
        let curIdx = this.h.length - 1;
        while (curIdx > 0) {
            let pIdx = Math.floor((curIdx - 1) / 2);
            if (this.h[pIdx][0] <= this.h[curIdx][0]) break;
            this.swap(pIdx, curIdx);
            curIdx = pIdx;
        }
    }
    bubbleD() {
        let curIdx = 0;
        let leftIdx, rightIdx;
        while (true) {
            leftIdx = curIdx * 2 + 1;
            rightIdx = curIdx * 2 + 2;
            let smallest = curIdx;

            if (leftIdx < this.h.length && this.h[leftIdx][0] < this.h[smallest][0]) {
                smallest = leftIdx;
            }
            if (rightIdx < this.h.length && this.h[rightIdx][0] < this.h[smallest][0]) {
                smallest = rightIdx;
            }
            if (smallest === curIdx) break;

            this.swap(curIdx, smallest);
            curIdx = smallest;
        }
    }
}

const pq = new PQ();
const dijkstra = () => {
    while (pq.size() > 0) {
        const [curW, curV] = pq.remove();
        if(dist[curV] !== curW) continue;
        
        for (const [nextV, nextW] of adj[curV]) {
            const tmpW = curW + nextW;
            if (tmpW < dist[nextV]) {  // 조기 return을 제거하여 가독성 향상
                dist[nextV] = tmpW;
                pq.add([tmpW, nextV]);
            }
        }
    }
};

const [n, m, k] = input[0].split(' ').map(Number);
const dist = Array(n + 1).fill(Infinity);
const adj = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i < input.length - 1; i++) {
    const [s, v, w] = input[i].split(' ').map(Number);
    adj[v].push([s, w]); // 반대로 넣기
}

const kList = input[input.length - 1].split(' ').map(Number);
for (const v of kList) {
    dist[v] = 0;
    pq.add([0, v]);
}

dijkstra();

// 최댓값 찾기 최적화
let maxIdx = 1, max = 0;
for (let i = 1; i < dist.length; i++) {
    if (dist[i] < Infinity && dist[i] > max) {
        maxIdx = i;
        max = dist[i];
    }
}

console.log(maxIdx);
console.log(max);