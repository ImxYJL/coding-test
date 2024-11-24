function solution(k, score) {
    const best = [];
    const min = [];
    
    score.forEach((sc, idx)=>{
        if(idx < k){
            best.push(sc);
        }    
        if(sc > Math.min(...best)){
            best.pop();
            best.push(sc);
            best.sort((a,b) => b-a);
        }
        min.push(best.at(-1));
    });
    
    return min;
}