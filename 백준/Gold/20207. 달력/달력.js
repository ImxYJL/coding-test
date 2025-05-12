const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const n = Number(input[0]);
const plans = [];

for(let i=1; i<input.length; i++){
    const [st, en] = input[i].split(' ').map(Number);
    plans.push([st, en]);
    
}

const arr = Array.from({length: 366}).fill(0);

plans.forEach(([start, end]) =>{
   for(let i=start; i<=end; i++){
       arr[i]++;
   } 
});

let totalSum = 0;
let sum = 0;
let width = 0;
let height = 0;

for(let i=1; i<=365; i++){
    // 일정이 있는 경우 
    if(arr[i] > 0){
        width++;
        height = Math.max(height, arr[i]);
    }else{
        // 일정이 없는 경우
        totalSum += width * height;
        height = 0;
        width = 0;
    }
}
totalSum += width * height;
console.log(totalSum);