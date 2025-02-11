const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let [T] = (input[0].split(' ').map(Number));
let index = 1;
const testCases = [];

for (let t = 0; t < T; t++) {
    const [w, h, k] = input[index].split(' ').map(Number);
    index++;

    const cabbagePositions = [];
    for (let i = 0; i < k; i++) {
        const [x, y] = input[index].split(' ').map(Number);
        cabbagePositions.push([x, y]);
        index++;
    }

    testCases.push({ w, h, k, cabbagePositions });
}

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

testCases.forEach(test =>{
    const {w, h, cabbagePositions} = test;
    
     const bd =  Array.from({length: 51} , () => Array(51).fill(0));
    const vis = Array.from({length: 51} , () => Array(51).fill(0));
     
    cabbagePositions.forEach((cabbage) => {
        const [x,y] = cabbage;
        bd[x][y] = 1;
    });

    let cnt = 0;
    
    for(let i=0; i<w; i++){
        for(let k=0; k<h; k++){
            if(bd[i][k] === 0 || vis[i][k]) continue;
    
            cnt++;
            const q = [];
            q.push({i, k});
            vis[i][k] = 1;
    
            while(q.length){
               const { i, k } = q.pop();
               const curX = i, curY = k;
                
                for(let dir=0; dir<4; dir++){
                    const nx = curX + dx[dir];
                    const ny = curY + dy[dir];
    
                    if(nx < 0 || nx >=w || ny < 0 || ny >=h) continue;
                    if(bd[nx][ny] ===0 || vis[nx][ny]) continue;
    
                    vis[nx][ny] = 1;
                    q.push({ i: nx, k: ny });
                }
            }  
        }
    }

    console.log(cnt);
});
