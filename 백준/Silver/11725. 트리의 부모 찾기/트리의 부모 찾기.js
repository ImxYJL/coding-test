const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const n = Number(input[0]);
const adj = Array.from({length: n+1}, () =>[]);
const parents = Array.from({length: n+1}, () =>0);
const visited = Array(n + 1).fill(false);

for(let i=1; i<n; i++){
    const [s,v] = input[i].split(' ').map(Number);
    adj[s].push(v);
    adj[v].push(s);
}

const dfs = (cur) => {
    visited[cur] = true;
    for (const next of adj[cur]) {
        if (!visited[next]) {
            parents[next] = cur;
            dfs(next);
        }
    }
};

dfs(1);
console.log(parents.slice(2).join('\n'));