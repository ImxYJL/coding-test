const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');
const [k, n] = input[0].split(' ').map(Number);
let arr = input.slice(1);
const ans = [];

const students = new Map();

for (let i = 0; i < arr.length; i++) {
    if (students.has(arr[i])) {
        students.delete(arr[i]); 
    }
    students.set(arr[i], i);  // 최신 값 저장
}

arr = Array.from(students.keys());

for (let i = 0; i < arr.length && ans.length < k; i++) {
    ans.push(arr[i]);
}

console.log(ans.join('\n'));
