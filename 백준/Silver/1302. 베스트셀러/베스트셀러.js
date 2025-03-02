const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');
const n = Number(input[0]);
input.shift();

const data = input.reduce((acc, cur)=>{
    if(!acc[cur]) acc[cur] = 0;

    acc[cur]++;
    return acc;
}, {});

const max = Math.max(...Object.values(data));
const filtered = Object.entries(data).filter(([key, value]) => value === max);
console.log(filtered.sort()[0][0]);