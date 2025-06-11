const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const N = input[0];
const nums = N.split('');
const paths = new Set();
let answer = 0;

function dfs(caseStr, left, right, path) {
  if (caseStr === N && !paths.has(path)) {
    paths.add(path);
    answer++;
    return;
  }

  if (left > 0) {
    dfs(nums[left - 1] + caseStr, left - 1, right, path + caseStr);
  }

  if (right < nums.length - 1) {
    dfs(caseStr + nums[right + 1], left, right + 1, path + caseStr);
  }
}

for (let i = 0; i < nums.length; i++) {
  dfs(nums[i], i, i, nums[i]);
}

console.log(answer);