const fs = require('fs'); 

const [first, second] = fs.readFileSync(0, 'utf8').trim().split('\n');
const [N, K] = first.split(' ').map(Number);
const kits = second.split(' ').map(Number);

let count = 0;
const used = Array(N).fill(false);

const dfs = (day, weight) => {
  if (day === N) {
    count++;
    return;
  }

  for (let i = 0; i < N; i++) {
    if (used[i]) continue;

    const nextWeight = weight - K + kits[i];
    if (nextWeight < 500) continue;

    used[i] = true;
    dfs(day + 1, nextWeight);
    used[i] = false;
  }
};

dfs(0, 500);
console.log(count);