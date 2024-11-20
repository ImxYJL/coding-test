function solution(t, p) {
    let curStart = 0;
    let curEnd = p.length;
    const len = t.length;
    let cnt = 0;
    const pNum = Number(p);
    
    while(1){
        if(curEnd > len)break;
        
        const curNum = Number(t.slice(curStart++, curEnd++));
        if(curNum <= pNum) cnt++;
    }
    
    return cnt;
}