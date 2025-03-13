const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');
const n = Number(input[0]);
const arr = input.slice(1).map(Number); // ✅ 입력 배열 제대로 변환

let cur = 0;
const ans = [];
const stack = [];

const play = () => {
    for (let i = 0; i < arr.length; i++) {
        // 1️⃣ 현재 숫자까지 스택에 push
        while (cur < arr[i]) {
            stack.push(++cur);
            ans.push('+');
        }

        // 2️⃣ 스택에서 pop해야 하는데, top이 arr[i]가 아닐 경우 예외 처리
        if (stack.length === 0 || stack.at(-1) !== arr[i]) {
            return false; // 순서대로 pop할 수 없는 경우 "NO" 출력
        }

        // 3️⃣ 올바르게 pop하는 경우
        stack.pop();
        ans.push('-');
    }
    return true;
};

// ✅ 실행 및 결과 출력
if (!play()) console.log("NO");
else console.log(ans.join('\n'));
