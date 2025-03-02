const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');
const T = Number(input[0]);
const testCase = [];
let line = 1;
for(let i=0; i<T; i++){
    const cmd = input[line++];
    const n = input[line++];
    const arr = JSON.parse(input[line++]).reverse();

    testCase.push({
        cmd, n, arr
    });
}

// class Q{
//     constructor(){
//         this.arr = [];
//         this.front = 0;
//         this.end = 0;
//     }
//     size(){
//         return this.end - this.front;
//     }
//     add(v){
//         this.arr[this.end++] = v;
//     }
//     remove(){
//         const toRemove = this.arr[this.front];
//         delete this.arr[this.front];
//         this.front++;

//         if(this.front === this.end) this.front = this.end = 0;
//         return toRemove;
//     }
// }

// console.log(testCase)

testCase.forEach(tc => {
    let { cmd, n, arr } = tc;
    arr.reverse(); // ✅ 처음부터 reverse() 적용

    let isRev = false;
    let isError = false;
    let front = 0, back = arr.length; // ✅ 인덱스를 활용해 O(1) 삭제 구현

    for (let i = 0; i < cmd.length; i++) {
        if (cmd[i] === 'R') {
            isRev = !isRev; // ✅ 방향 전환
        } 
        if (cmd[i] === 'D') {
            if (front === back) { // ✅ 배열이 비었는지 확인
                console.log("error");
                isError = true;
                break;
            }
            if (isRev) back--; // ✅ pop()을 사용 (뒤에서 제거)
            else front++; // ✅ shift() 대신 앞 인덱스를 증가 (O(1))
        }
    }

    if (!isError) {
        const result = arr.slice(front, back); // ✅ front~back 범위만 잘라서 출력
        if (isRev) result.reverse(); // ✅ 최종 방향 맞추기
        console.log(`[${result.join(',')}]`);
    }
});