const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n').filter(Boolean);

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const q = Number(input[2]);

const mistakes = Array(n).fill(0);
for (let i = 1; i < n; i++) {
  if (arr[i] < arr[i - 1]) mistakes[i] = 1;
}

const sums = Array(n).fill(0);
for (let i = 1; i < n; i++) {
  sums[i] = sums[i - 1] + mistakes[i];
}

let result = '';
for (let i = 3; i < 3 + q; i++) {
  const [l, r] = input[i].split(' ').map(Number);
  result += (sums[r - 1] - sums[l - 1]) + '\n';
}

process.stdout.write(result);