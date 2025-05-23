const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

class PQ{
    constructor(compareFn){
        this.h = []
        this.compare = compareFn;
    }
    swap(idx1, idx2){
        [this.h[idx2], this.h[idx1]] = [this.h[idx1], this.h[idx2]];
    }
    size(){
        return this.h.length;
    }
    add(v){
        this.h.push(v);
        this.bubbleUp();
    }
    remove(){
        if(this.size() === 1) return this.h.pop();
        if(this.size() === 0) return null;

        const toRemove = this.h[0];
        this.h[0] = this.h.pop();
        this.bubbleDown();
        return toRemove;
    }
    peek(){
        return this.h[0] ?? null;
    }
    bubbleUp(){
        let idx = this.h.length - 1;
        let pIdx = Math.floor((idx-1) /2);

        while(
            this.h[pIdx] && 
            // MinHeap: 값이 더 작으면 (우선순위 ↑) → 올라감
            // 음수: a가 b보다 먼저, 즉 우선순위 높음
            // compare 결과가 음수: child의 수가 더 작다 = 우선순위가 높다
            this.compare(this.h[idx], this.h[pIdx]) < 0
        ){
            this.swap(pIdx, idx);
            idx = pIdx;
            pIdx = Math.floor((idx-1)/2);
        }
    }
    bubbleDown(){
        let idx = 0; 
        let leftIdx = idx * 2 + 1;
        let rightIdx = idx * 2 + 2;

        while(
            (this.h[leftIdx] && this.compare(this.h[leftIdx], this.h[idx]) < 0
            )||
            (this.h[rightIdx] && this.compare(this.h[rightIdx], this.h[idx]) < 0)
        ){
            let smallerIdx = leftIdx;
            if(this.h[rightIdx] && this.compare(this.h[rightIdx], this.h[leftIdx]) < 0)
                smallerIdx = rightIdx;
            this.swap(idx, smallerIdx);
            idx = smallerIdx;
            leftIdx = idx * 2 + 1;
            rightIdx = idx * 2 + 2;
        }
    }
}

const easyCompare = (child, parent) => {
    if(child[0] !== parent[0]) return child[0] - parent[0]; // 난이도 오름차순
    return child[1] -  parent[1];
}

const hardCompare = (a, b) => {
    if(a[0] !== b[0]) return b[0] - a[0];
    return b[1] - a[1]; 
}

const hardPq = new PQ(hardCompare);
const easyPq = new PQ(easyCompare);
const isSolved = Array.from({length: 100001}, () => 0);
const currentLevel = Array(100001).fill(null);

const getValidP = (q) => {
  while (true) {
    const top = q.peek();
    if (!top) return null; // 안전 처리
    const [l, p] = top;
    if (!isSolved[p] && currentLevel[p] === l) return p;
    q.remove();
  }
};

const recommend = (x) => {
    if(x=== 1) console.log(getValidP(hardPq));
    else console.log(getValidP(easyPq));
};

const add = (p, l) => {
    currentLevel[p] = l; // 최신 레벨도 갱신 필요
    isSolved[p] = 0;
    hardPq.add([l, p])
    easyPq.add([l, p])
};

const solved = (p) => isSolved[p] = 1;

const n = Number(input[0]);
for (let i = 1; i <= n; i++) {
  const [p, l] = input[i].split(' ').map(Number);
    
  currentLevel[p] = l;
  hardPq.add([l, p]);
  easyPq.add([l, p]);
}

const m = Number(input[n + 1]); 
for (let i = n + 2; i < input.length; i++) {
  let [cmd, p, l] = input[i].split(' ');
  p = Number(p);
  l = Number(l);

  if (cmd === 'recommend') recommend(p);
  if (cmd === 'solved') solved(p);
  if (cmd === 'add') add(p, l);
}