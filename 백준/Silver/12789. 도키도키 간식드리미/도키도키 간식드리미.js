const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const stack = [];
let step = 1;
let isPossible = true;

for(let i=0; i<n; i++){
    while(stack.length && stack.at(-1) === step){
        stack.pop();
        step++;
    }
    
    if(arr[i] < step) {
        isPossible = false;
        break;
    }
    else if(arr[i] > step) stack.push(arr[i]);
    else if(arr[i] === step) step++;
}

while(stack.length){
    if(stack.pop() !== step){
        isPossible = false;
        break;
    }
    step++;
}

if(isPossible) console.log('Nice')
else console.log('Sad');