const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
// 1-based index
arr.unshift(0);

const sums = Array(n + 1).fill(0);
for (let i = 1; i <= n; i++) {
    sums[i] = sums[i - 1] + arr[i];
}

let ans = 0;
for (let i = 2; i < n; i++) {
    // 벌(1), 벌(i), 벌통(n)
    const case1 = (sums[n] - arr[1] - arr[i]) + (sums[n] - sums[i]);

    // 벌(1), 벌통(i), 벌(n)
    const case2 = (sums[i] - arr[1]) + (sums[n - 1] - sums[i - 1]);

    // 벌통(1), 벌(i), 벌(n)
    const case3 = sums[i - 1] + (sums[n - 1] - arr[i]);

    ans = Math.max(ans, case1, case2, case3);
}

console.log(ans);