const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const [n, l, r] = input[0].split(' ').map(Number);
const bd = Array.from({length: n}, ()=>Array(n).fill(0));

for(let i=1; i<input.length; i++){
    const arr = input[i].split(' ').map(Number);
    for(let k=0; k<n; k++){
        bd[i-1][k] = arr[k];
    }
}

const dx = [1,0,-1,0];
const dy = [0,1,0,-1];

let unionIdx = 0;
let unions = [];

const isPossible = ([x1, y1], [x2, y2]) =>{
    const res = Math.abs(bd[x1][y1] - bd[x2][y2]);
    return l <= res && r >= res;
}

const bfs = (x, y, vis) =>{
    const q= [];

    vis[x][y] = 1;
    q.push([x,y]);
    unions[unionIdx] = [[x, y]];

    while(q.length){
        const [curX, curY] = q.shift();
        
        for(let dir=0; dir<4; dir++){
            const nx = curX + dx[dir];
            const ny = curY + dy[dir];

            if(nx >= n || ny >=n || nx < 0 || ny <0) continue;
            if(!isPossible([curX, curY], [nx, ny]) || vis[nx][ny]) continue;

            vis[nx][ny] = 1;
            q.push([nx, ny]);
            unions[unionIdx].push([nx, ny]);
        }
    }
    unionIdx++; // 다음 bfs를 위해 인덱스 증가
}

const day = () =>{
    let isMoved = false;
    const vis = Array.from({length: n}, ()=>Array(n).fill(0));
    
    for(let i=0; i<n; i++){
        for(let k=0; k<n; k++){
            if(!vis[i][k]) {
                bfs(i,k, vis);
                
            }
        }
    }

    // 합치기: unions[idx] > 1일 때만 연합 유효
    for(let i=0; i<= unionIdx; i++){
        if(unions[i] && unions[i].length > 1){
            isMoved = true;
            
            // 값 구하기
            const sum = unions[i].reduce((acc, [x, y]) => acc + bd[x][y], 0);
            const res = Math.floor(sum / unions[i].length);
            // 바꾸기
            unions[i].forEach(([x,y])=> bd[x][y] = res);
        }
    }

    // 초기화
    unions = [];
    unionIdx = 0;

    return isMoved;
};

let cnt = 0;
while(1){
    const res = day();
    if(!res) break;
    cnt++;
}

console.log(cnt);