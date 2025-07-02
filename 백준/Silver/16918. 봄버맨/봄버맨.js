const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const [r,c,n] = input[0].split(' ').map(Number);
const q= [];
const bd= [];
const first = [];
const second = Array.from({length: r}, ()=>Array(c).fill('O'));
const odd = Array.from({length: r}, ()=>Array(c).fill(''));
const even =  Array.from({length: r}, ()=>Array(c).fill(''));

for(let i=1; i<input.length; i++){
    bd[i-1] = input[i].split('');
    first[i-1] = input[i].split('');
}

const dx = [1,0,-1,0];
const dy = [0, 1, 0, -1];

const bomb = (x, y)=>{
    bd[x][y] = '.';
    
    for(let dir =0; dir<4; dir++){
        const nx = x + dx[dir];
        const ny = y + dy[dir];
        if(nx < 0 || nx >= r || ny <0 || ny >=c) continue;
        
        bd[nx][ny] = '.';
    }
}

// 폭탄 좌표 저장
for(let i=0; i<r; i++){
    for(let k=0; k<c; k++){
        if(bd[i][k] === 'O') q.push([i,k]);
    }
}

for(let i=0; i<r; i++){
    for(let k=0; k<c; k++){
        if(bd[i][k] === '.') bd[i][k] = 'O';
    }
}

while(q.length){
    const [x,y] = q.pop();
    bomb(x,y);
}

for(let i=0; i<r; i++){
    for(let k=0; k<c; k++){
        odd[i][k] = bd[i][k];
        if(bd[i][k] === '.') bd[i][k] = 'O'
        else q.push([i,k]);
    }
}

while(q.length){
    const [x,y] = q.pop();
    bomb(x,y);
}

for(let i=0; i<r; i++){
    for(let k=0; k<c; k++){
        even[i][k] = bd[i][k];
    }
}

if(n===1){
    console.log(first.map(row => row.join('')).join('\n'));
}else if(n%2 ===0){
    console.log(second.map(row => row.join('')).join('\n'));
}else{
    const isEven = n % 4 !== 3;
    if(isEven) console.log(even.map(row => row.join('')).join('\n'));
    else console.log(odd.map(row => row.join('')).join('\n'));
}