const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const n = Number(input[0]);

const results = [];

const dfs = (num, lastNum) =>{
    results.push(Number(num));

    for(let i=0; i<lastNum; i++){
        dfs(num + i, i);
    }
};

for(let i=0; i<=9; i++) dfs(String(i), i);
results.sort((a,b) => a-b);

if(n > results.length) console.log('-1');
else console.log(results[n-1]);