const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const adj = Array.from({length: n+1}, () =>[]);
let minCount = Infinity;
let minIdx = 0;

for(let i=1; i<input.length; i++){
    const [v1, v2] = input[i].split(' ').map(Number);
    adj[v1].push(v2);
    adj[v2].push(v1);
}

// // 모든 요소에 대해 bfs
for(let i=1; i<= n; i++){
    const q = [];
    const dist = Array(n + 1).fill(-1);

    dist[i] = 0;
    q.push(i);

    while (q.length > 0) {
        const cur = q.shift();

        for (const next of adj[cur]) {
            if (dist[next] !== -1) continue;
            dist[next] = dist[cur] + 1;
            q.push(next);
        }
    }
    const count = dist.reduce((acc, cur) => acc += cur, 0) - dist[i] + 1;
    if(minCount > count){
        minCount = count;
        minIdx = i;
    }
}

console.log(minIdx);