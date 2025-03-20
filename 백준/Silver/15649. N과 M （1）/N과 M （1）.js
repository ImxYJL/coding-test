const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const isUsed = Array.from({length: n+1} , () => false);
const arr = [];

// 나만 빼고 순서대로 하나씩 고르기
const func = (count) =>{
    if(count === m){
        console.log(arr.join(' '));
        return;
    }
    
    for(let i=1; i<=n; i++){
        if(!isUsed[i]){
            arr[count] = i;
            isUsed[i] = true;
            func(count+1);
            isUsed[i] = false;
        }
    }
}

func(0);