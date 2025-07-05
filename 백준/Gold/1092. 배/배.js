const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const n = Number(input[0]);
const cranes = input[1].split(' ').map(Number);
const m = Number(input[2]);
const boxes = input[3].split(' ').map(Number);

cranes.sort((a,b) => b-a);
boxes.sort((a,b)=> b-a);

// 최초 1회만 검사
if(cranes[0] < boxes[0]){
    console.log('-1');
    return;
}

let cnt = 0;
const isPossible = Array.from({length: m}, ()=>1);
while(boxes.length){
    let curIdx = 0;

    for(const crane of cranes){
        while(curIdx < boxes.length){
            if(crane >= boxes[curIdx] && isPossible[curIdx]){
                isPossible[curIdx] = 0;
                break;
            }
            curIdx++;
        }
    }
    cnt++;
    if(isPossible.every(v => v === 0)) break;
}

console.log(cnt);