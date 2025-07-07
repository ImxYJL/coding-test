const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const countOdd = (num) =>{
    const str = String(num);
    const res = str.split('').filter(v => Number(v) % 2 > 0);

    return res.length;
}

let min = Infinity;
let max = 0;

const updateData = (num) =>{
    min = Math.min(num, min);
    max = Math.max(num, max);
}

const dfs = (num, oddCount) =>{
    const str = String(num);
    const curLen = str.length;
    oddCount += countOdd(num);

    if(num <= 9){
        updateData(oddCount);
        return;
    }

    if(num <= 99){
        const nums = String(num).split('').map(Number);
        const sum = nums[0] + nums[1];
        dfs(sum, oddCount);
        return;
        
    }

    for(let i = 1; i< curLen; i++){
        for(let k = i+1; k<curLen; k++){
            const a = Number(str.slice(0, i));
            const b = Number(str.slice(i, k));
            const c = Number(str.slice(k));

            dfs(a+b+c, oddCount);
        }
    }
};

dfs(Number(input[0]), 0);
console.log(min, max)