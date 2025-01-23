function solution(sizes) {
    let maxR = 0;
    let maxC = 0;
    
    sizes.forEach(([row, col]) =>{
        const [M, m] = row < col ? [col, row] : [row, col];
        maxR = Math.max(M, maxR);
        maxC = Math.max(m, maxC);
    })
    
    return maxR * maxC;
}