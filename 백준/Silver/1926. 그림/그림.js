const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const [n,m] = input[0].split(' ');
input.shift();
const bd = input.map(line => line.split(' ').map(Number));

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
const vis = Array.from({length: 501} , () => Array(501).fill(0));

let maxWidth = 0;
let cnt = 0;

for(let i=0; i<n; i++){
    for(let k=0; k<m; k++){
        if(bd[i][k] === 0 || vis[i][k]) continue;

        cnt++;
        let width = 0;
        const q = [];
        q.push({i, k});
        vis[i][k] = 1;

        while(q.length){
           const { i, k } = q.pop();
           const curX = i, curY = k;

            width++;
            
            for(let dir=0; dir<4; dir++){
                const nx = curX + dx[dir];
                const ny = curY + dy[dir];

                if(nx < 0 || nx >=n || ny < 0 || ny >=m) continue;
                if(bd[nx][ny] ===0 || vis[nx][ny]) continue;

                vis[nx][ny] = 1;
                q.push({ i: nx, k: ny });
            }
        }  
        maxWidth = Math.max(maxWidth, width);
    }
}

console.log(cnt);
console.log(maxWidth);