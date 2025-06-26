const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const n = Number(input[0]);
const bd = input.slice(1).map(line => line.split(' ').map(Number));

// 가능한 중심 좌표
const centers = [];
for (let i = 1; i < n - 1; i++) {
  for (let j = 1; j < n - 1; j++) {
    centers.push([i, j]);
  }
}

const getFlowers = (x, y) => [
  [x, y],
  [x + 1, y],
  [x - 1, y],
  [x, y + 1],
  [x, y - 1],
];

const isValid = (used, flowers) => {
  for (const [x, y] of flowers) {
    if (used[x][y]) return false;
  }
  return true;
};

const mark = (used, flowers, flag) => {
  for (const [x, y] of flowers) used[x][y] = flag;
};

const getCost = (flowers) =>
  flowers.reduce((sum, [x, y]) => sum + bd[x][y], 0);

let min = Infinity;
const used = Array.from({ length: n }, () => Array(n).fill(false));

const dfs = (idx, count, sum) => {
  if (count === 3) {
    min = Math.min(min, sum);
    return;
  }

  for (let i = idx; i < centers.length; i++) {
    const [x, y] = centers[i];
    const flower = getFlowers(x, y);
    if (!isValid(used, flower)) continue;

    const cost = getCost(flower);
    mark(used, flower, true);
    dfs(i + 1, count + 1, sum + cost);
    mark(used, flower, false); 
  }
};

dfs(0, 0, 0);
console.log(min);