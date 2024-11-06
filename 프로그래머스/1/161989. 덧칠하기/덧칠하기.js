function solution(n, m, section) {
    let count = 0;
    let painted = 0;
    
    section.forEach(unpainted =>{
        if(painted < unpainted){
            painted = unpainted + m-1;
            count++;
        }
    });
    
    return count;
}