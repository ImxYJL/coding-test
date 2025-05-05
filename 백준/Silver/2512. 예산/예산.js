const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const total = Number(input[2]);

arr.sort((a,b) => a-b);

let start = 1;
let end = arr.at(-1) + 1;
let ans = 1;

// 상한값보다 작으면 그대로, 같거나 크면 상한값으로 설정
const isAvailable = (point) => {
    let sum = 0;

    for(let i=0; i<arr.length; i++){
        if(arr[i] < point) sum += arr[i];
        else sum += point;
    }

    return sum <= total;
};

while(start<end){
    mid = Math.floor((start + end) / 2);

    if(isAvailable(mid)){
        ans = mid;
        start = mid + 1;
    }
    else{
         end = mid;
    }
}

console.log(ans);