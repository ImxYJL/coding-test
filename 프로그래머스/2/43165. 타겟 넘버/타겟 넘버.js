function solution(numbers, target) {
    let cnt = 0;
    const len = numbers.length;
    
    const func = (curIdx, sum) =>{
        if(len === curIdx){
            if(sum === target) cnt++;
            return;
        }
        
        func(curIdx+1, sum + numbers[curIdx]);
        func(curIdx+1, sum - numbers[curIdx]);
    };
    
    func(0, 0);
    
    return cnt;
}