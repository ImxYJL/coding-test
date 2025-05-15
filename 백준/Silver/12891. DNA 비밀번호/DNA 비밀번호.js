const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const [s, p] = input[0].split(' ').map(Number);
const str = input[1];
const need = input[2].split(' ').map(Number); // [A, C, G, T]
const cur = [0, 0, 0, 0]; // 현재 윈도우 내 문자 개수
let satisfied = 0;
let result = 0;

const convert = (c) => {
  if (c === 'A') return 0;
  if (c === 'C') return 1;
  if (c === 'G') return 2;
  if (c === 'T') return 3;
};

for (let i = 0; i < 4; i++) {
  if (need[i] === 0) satisfied++;
}

for (let i = 0; i < p; i++) {
  const idx = convert(str[i]);
  cur[idx]++;
  if (cur[idx] === need[idx]) satisfied++;
}

if (satisfied === 4) result++;

for (let i = p; i < s; i++) {
  const addIdx = convert(str[i]);       // 들어오는 문자
  const removeIdx = convert(str[i - p]); // 나가는 문자

  if (cur[removeIdx] === need[removeIdx]) satisfied--;
  cur[removeIdx]--;

  cur[addIdx]++;
  if (cur[addIdx] === need[addIdx]) satisfied++;

  if (satisfied === 4) result++;
}

console.log(result);