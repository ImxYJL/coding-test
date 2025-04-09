const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const [n, k, q, m] = input[0].split(' ').map(Number);
const sleepList = Array.from({length: n+3} , () => 0);
const tmp = input[1].split(' ').map(Number);
for(let i=0; i<tmp.length; i++){
    sleepList[tmp[i]] = 1;
}

const studentList = input[2].split(' ').map(Number);
const inputList = [];

for(let i=3; i<input.length; i++){
    const [s, e] = input[i].split(' ').map(Number);
    inputList.push([s,e]);
}

// 조사하기
const ansList = Array.from({length: n+3} , () => 1);
    // 자는 학생이면 패스 
    // 출석번호를 갖고 있는 학생이면 배수에 뿌림
for (const student of studentList) {
    if (sleepList[student]) continue; // 자는 학생은 패스

    for (let j = student; j <= n + 2; j += student) {
        if (!sleepList[j]) ansList[j] = 0;
    }
}


// 누적합 구하기
const preSum =  Array.from({length: n+3} , () => 0);
for(let i=3; i<=n+2; i++){
    preSum[i] = preSum[i-1] + ansList[i];
}

// 답을 출력 -> 최적화할 것
const ans = [];
inputList.forEach(([s,e])=>{
    ans.push(preSum[e] - preSum[s-1]); 
});
console.log(ans.join('\n'));