const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let cnt = 0;
const stack = [];
const n = Number(input[0]);

for(let i=1; i<input.length; i++){
    const [x, y] = input[i].split(' ').map(Number);

    while(stack.length > 0 && stack.at(-1) > y){
        stack.pop();
        cnt++;
    }

    if(stack.length > 0 && stack.at(-1) === y)continue;

    stack.push(y);
}

while(stack.length > 0){
    if(stack.at(-1) > 0) cnt++;
    stack.pop();
}

console.log(cnt);