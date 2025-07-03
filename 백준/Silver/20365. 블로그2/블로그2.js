const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const n = Number(input[0]);
const str = input[1];

let bCnt = 0; let rCnt = 0;
let curColor = str[0];
if(curColor === 'B') bCnt++;
else rCnt++;

for(let i=1; i<str.length; i++){
    if(str[i] !== curColor){
        if(str[i] === 'B') bCnt++;
        else rCnt++;
        curColor = str[i];
    }
}
console.log(Math.min(bCnt, rCnt)+1);