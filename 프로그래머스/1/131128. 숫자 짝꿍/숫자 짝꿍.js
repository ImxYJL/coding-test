function solution(X, Y) {
    // 1. 통계 추출
    const xArr = X.split('').reduce((prev, cur)=>{
        if(prev[cur] === undefined) prev[cur] = 0;
        
        prev[cur]++;
        return prev;
    },{});
    
    const yArr = Y.split('').reduce((prev, cur)=>{
        if(prev[cur] === undefined) prev[cur] = 0;
        
        prev[cur]++;
        return prev;
    },{});
    
    // 2. 
    //const numArr = Object.entries(xArr).filter((key,))
    const numArr = [];
    for(let i =0; i<10; i++){
        if(xArr[i] === undefined|| yArr[i] === undefined) continue;
        
        const min = Math.min(xArr[i], yArr[i]);
        
        for(let k =0; k<min; k++){
            numArr.push(i);
        }
        
    }
    // 정렬 
    const sortedArr = numArr.sort((a,b) => b-a);
    
    // 수 조합하기
    if(sortedArr.length === 0) return "-1";
    if(sortedArr.every(num => num === 0)) return '0';
    return sortedArr.join('');
}