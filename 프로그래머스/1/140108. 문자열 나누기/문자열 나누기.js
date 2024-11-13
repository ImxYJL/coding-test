function solution(s) {
    let cutCount = 0;
    let xCnt = 0;
    let notXCnt = 0;
    const sLen = s.length;
    
    let x = s[0];
    
    [...s].forEach((char, idx)=>{
        
        //if (xCnt === 0 && notXCnt === 0) x = char; // 문자열 자른 경우
        
        if(notXCnt === xCnt){ // 자르는 조건
                console.log('here');
                
                notXCnt = 0;
                xCnt = 0;
                cutCount++; 
                
                if(idx < sLen - 1){
                    x = s[idx+1];
                }
            }
        
        if(char !== x){
            notXCnt++;
            
            
        }
        else {
            xCnt++;
        }
        console.log(xCnt, notXCnt);
    });
    
    return cutCount;
}