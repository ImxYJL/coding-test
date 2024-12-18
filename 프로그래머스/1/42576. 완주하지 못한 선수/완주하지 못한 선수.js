function solution(participant, completion) {
    const parMap = participant.reduce((prev, par)=>{
        if(!prev.has(par)) prev.set(par, 0);
        
        prev.set(par, prev.get(par) + 1);
        return prev;
    }, new Map());
    
    completion.forEach(com =>{
        parMap.set(com, parMap.get(com) - 1);
    });

    return Array.from(parMap).find(([key, value]) => value > 0)[0];
}