function solution(priorities, location) {
    let count = 1;
    let queue = [...priorities.map((p, idx) => [p, idx === location])].reverse();
    
    while(queue.length > 0){
        const max = Math.max(...queue.map((item) => item[0]));
        while(queue.at(-1)[0] !== max){
            const tmp = queue.pop();
            queue = [tmp, ...queue];
        }
        
        const curMax = queue.pop(); 
        
        if (curMax[1]) return count; 
        count++;
    }
    
    return count;
}