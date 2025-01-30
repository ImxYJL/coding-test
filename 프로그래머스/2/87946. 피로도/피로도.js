function solution(k, dungeons) {
    let ans = 0;
    const isVisitedArr = Array(dungeons.length).fill(false);
    
    const rec = (count,k) =>{  
        for(let i=0; i<dungeons.length; i++){
            const [need, consume] = dungeons[i];
            
            if(k >= need && !isVisitedArr[i]){
                isVisitedArr[i] = true;
                rec(count + 1, k-consume);
                isVisitedArr[i] = false;
            }
        }
        ans = Math.max(count, ans);
    }
    
    rec(0, k);
    
    return ans;
}