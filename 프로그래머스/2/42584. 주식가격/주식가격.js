function solution(prices) {
    // 1. 주식이 항상 오른다고 가정하고!! 초기값 세팅
    const len = prices.length;
    const answer = prices.map((price, idx) => len - idx + 1);
    answer.pop(); answer.push(0);
    
    // 2. 초기값과 주식 비교 -> 실제 주식 가격이 더 낮은 경우 그 차액을 새로 갱신
    const stack = []; // 조사 대상인 인덱스를 넣는 스택
    for(let i=0; i<prices.length; i++){
       while(stack.length && prices[stack.at(-1)] > prices[i]){ // 값이 떨어진 경우
            let idx = stack.pop();
            answer[idx] = i - idx; // 현재 순회 위치 - 커진 시점의 위치
       }
        stack.push(i);
    }
  
    while(stack.length){
        const tmp = stack.pop();
        answer[tmp] = len - tmp - 1; // 전체 길이 - 내가 있던 위치 - 1
    }
    return answer;
    //console.log(answer);
}