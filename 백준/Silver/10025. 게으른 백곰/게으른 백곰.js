const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const [n, k] = input[0].split(' ').map(Number)

const bd = Array.from({length: 1_000_001}).fill(0)
const sums = Array.from({length: 1_000_001}).fill(0)

for(let i=1; i<input.length; i++){
    const [ice, x] = input[i].split(' ').map(Number)
    bd[x] = ice
}

sums[0] = bd[0]
for(let i=1; i<bd.length; i++){
    sums[i] = sums[i-1] + bd[i]
}

let maxSum = sums[0]
for(let i=0; i<bd.length; i++){
    const left = Math.max(0, i - k);
    const right = Math.min(1_000_000, i + k);
    
    const curSum = sums[right] - (left > 0 ? sums[left-1] : 0)
    maxSum = Math.max(curSum, maxSum)
}

console.log(maxSum)