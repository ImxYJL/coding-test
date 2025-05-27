function solution(diffs, times, limit) {
    const isPossible = (curLevel) =>{
        let totalSpendTime = 0;
        
        for(let i=0; i<diffs.length; i++){
            let curSpendTime = times[i];
            
            if(diffs[i] > curLevel){
                const loop = diffs[i] - curLevel;
                curSpendTime += times[i] * loop;
                
                if(i>0) curSpendTime += times[i-1] * loop; // 이전 단계 문제 풀기
            }
            totalSpendTime += curSpendTime;
        }
        return limit >= totalSpendTime
    }
    
    let start = 1;
    let end = diffs.reduce((acc, cur) => Math.max(acc, cur), 1)
    let minLevel = end;
    
    while(start < end){
        const mid = Math.floor((start + end) / 2);
        if (isPossible(mid)) {
            minLevel = mid;
            end = mid;
        } else {
            start = mid + 1;
        }
    }
    return minLevel;
}