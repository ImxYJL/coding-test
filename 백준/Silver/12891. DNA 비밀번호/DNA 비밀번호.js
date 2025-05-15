const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const [s, p] = input[0].split(' ').map(Number);
const str = input[1];
// A C G T
const need = input[2].split(' ').map(Number);
const curCount = [0,0,0,0];

const convert = (char) => {
    if(char==='A') return 0;
    if(char==='C') return 1;
    if(char==='G') return 2;
    if(char==='T') return 3;
}

for(let i=0; i<p; i++){
    const idx = convert(str[i]);
    curCount[idx] += 1;
}

let count = 0;
if(curCount.every(((curCnt, i) => curCnt >= need[i]))){
    count++;
}

for (let i = 1; i <= s - p; i++) {
  const outIdx = convert(str[i - 1]);
  const inIdx = convert(str[i + p - 1]);
  curCount[outIdx]--;
  curCount[inIdx]++;

  if (curCount.every((cur, i) => cur >= need[i])) {
    count++;
  }
}
console.log(count)