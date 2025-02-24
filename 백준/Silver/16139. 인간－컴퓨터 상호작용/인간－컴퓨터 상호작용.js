const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const str = input[0];
const q = Number(input[1]);

const testCase = [];
for(let line=2; line<input.length; line++){
    const [c, strStart, strEnd] = input[line].split(' ');
    testCase.push({
        c: c,
        start: Number(strStart),
        end: Number(strEnd),
    })
}

const arr = [];
//const arr = Array.from({length: str.length}).fill([]);
const dir = new Map();
for(let i=0; i<str.length; i++){
    // 현재 탐색한 char의 개수 갱신
    if(dir.has(str[i])){
        let tmp = dir.get(str[i]); 
        dir.set(str[i], tmp+1);
    }else{
        dir.set(str[i], 1);
    }

    // 전체 배열 최신화: 현재 인덱스와 새 map을 세팅
    arr.push([i, new Map(dir.entries())]);
}

//console.log(arr);

// 근데 굳이 2중배열일 필요 없는듯 (인덱스 저장 불필요)
testCase.forEach(test =>{
    const {c, start, end} = test;

    const countEnd = arr[end][1].get(c) ?? 0;
const countStart = arr[start-1] ? arr[start-1][1].get(c) ?? 0 : 0;
    console.log(countEnd - countStart);

    // // c가 없을 때의 undefined 처리도 필요하긴 할듯?
    // console.log(c, start ,end);
    // // console.log(arr[end],arr[end][1].get(c));
    // console.log(arr[end][1].get(c) - arr[start-1][1].get(c));
});
