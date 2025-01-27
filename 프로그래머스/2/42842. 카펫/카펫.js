function solution(brown, yellow) {
    const area = brown + yellow;
    const ans = [];
    
    for(let w = area - 1; w >0; w--){
        if(area % w) continue;
        
        // 현재 width일 때의 h 구하기
        const h = area / w;
        
        const y = (w-2) * (h-2);
        const b = area - y;
        
        if(y === yellow && b === brown){
            ans.push(w);
            ans.push(h);
            break;
        }
    }
    
    return ans;
}