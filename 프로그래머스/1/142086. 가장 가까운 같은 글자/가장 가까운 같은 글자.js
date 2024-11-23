function solution(s) {
    const idxMap = new Map();
    const ans = [];
    
    [...s].forEach((char, idx)=>{
        
        
        if(idxMap.has(char)){
            const storedIdx = idxMap.get(char);
            ans.push(idx-storedIdx);
        }else{
            ans.push(-1);
        }
         idxMap.set(char, idx);
    });
    return ans;
}