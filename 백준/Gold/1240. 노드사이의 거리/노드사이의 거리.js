const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const [n,m] = input[0].split(' ').map(Number);
const adj = Array.from({length: n+1} , () => []);

const bfs = (startV, endV) =>{
    const vis = Array.from({length: n+1}, ()=>false);
    const q = []; // 현재 노드, 지금까지의 거리
    q.push([startV, 0]);
    vis[startV] = true;

    while(q.length>0){
        const [curV, curDist] = q.shift();

        if(curV === endV) return curDist;
        
        for (let [v, dist] of adj[curV]){
            if(vis[v]) continue;

            vis[v] = true;
            q.push([v, curDist + dist]);
        }
    }
    
};

for(let i=1; i<n; i++){
    const [u, v, w] = input[i].split(' ').map(Number);
    adj[u].push([v,w]);
    adj[v].push([u, w]);
}

for(let i=n; i<n+m; i++){
    const [v1, v2] = input[i].split(' ').map(Number);
    console.log(bfs(v1, v2));
}