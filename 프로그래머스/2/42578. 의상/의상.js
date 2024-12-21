function solution(clothes) {
    const clothMap = clothes.reduce((prev, info)=>{
        const kind = info[1];
        if(!prev.has(kind)) prev.set(kind, 0);
        
        prev.set(kind, prev.get(kind)+1);
        return prev;
    }, new Map());
    
    let cnt = 1;
    
    clothMap.forEach(value => cnt *= value + 1);
    return cnt - 1;
}