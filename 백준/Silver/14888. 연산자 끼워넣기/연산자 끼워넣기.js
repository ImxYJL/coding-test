const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const numbers = input[1].split(' ').map(Number);
const operatorInput = input[2].split(' ').map(Number);
const operators = [];
const operatorLists = [];
const isUsed = Array.from({length: n}, () => false);

const parseOperator = () =>{
    for(let i=0; i<operatorInput.length; i++){
        let num = operatorInput[i];

        if(i===0) {
            while(num--) operators.push('+');
        }
        if(i===1){
            while(num--) operators.push('-');
        }
        if(i===2){
            while(num--) operators.push('*');
        }
        if(i===3){
            while(num--) operators.push('/');
        }
    }
}

const backtrack = (curArr) =>{
    if(curArr.length === n-1){
        operatorLists.push(curArr.join(''));
        return;
    }

    for(let i=0; i<n-1; i++){
        if(!isUsed[i]){
            isUsed[i] =true;
            curArr.push(operators[i]);
            backtrack(curArr);

            curArr.pop();
            isUsed[i] = false;
        }
    }
}

let max = -Infinity;
let min = Infinity;

// 계산
const calculate = (operatorList) =>{
    const tmpNumbers = [...numbers];
    
    for(let i=1; i<n; i++){ // ㄱㅊ나?
        const first = tmpNumbers.shift();
        const second = tmpNumbers.shift();
        const operator = operatorList[i-1];

        if(operator === '+'){
            tmpNumbers.unshift(first + second);
        }
        if(operator === '-'){
            tmpNumbers.unshift(first - second);
        }
        if(operator === '*'){
            tmpNumbers.unshift(first * second);
        }
        if(operator === '/'){
            // 음수를 양수로 나눌 때
            if(first < 0 && second > 0) {
                const tmp = Math.floor(Math.abs(first) / second);
                tmpNumbers.unshift(-tmp);
            }else{
                const tmp = Math.floor(first / second);
                tmpNumbers.unshift(tmp);
            }
        }
    }
    return tmpNumbers.reduce((acc, cur) => acc + cur, 0);
}

parseOperator();
backtrack([]);

// 연산자 종류만큼 계산 실행 후 최대, 최소 갱신 
operatorLists.forEach(operatorList =>{
   const res = calculate(operatorList); 
    max = Math.max(res, max);
    min = Math.min(res, min);
});
console.log(max);
console.log(min);