const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
let p = 0;

const n = input[p++];
const have = new Set();
for (let i = 0; i < n; i++) have.add(input[p++]);

const m = input[p++];
const result = [];
for (let i = 0; i < m; i++) {
  result.push(have.has(input[p++]) ? 1 : 0);
}

console.log(result.join(' '));