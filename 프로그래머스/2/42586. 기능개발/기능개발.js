function solution(progresses, speeds) {
    const getRest = (progress, speed) =>{
        let n = 1;
        while(n< Math.ceil((100-progress)/speed))n++;
        return n;
    }
    
    const schedule = [];
    const restList = [...progresses.map((progress, idx) => getRest(progress, speeds[idx])).reverse()];
    
    let workPerDay = 0;
    let curDate = 1;
    
    while(restList.length){
        while(restList.at(-1) <= curDate){
            workPerDay++;
            restList.pop();
        }
        
        if(workPerDay > 0) schedule.push(workPerDay);  
        workPerDay = 0;
        curDate++;
    }
    
    return schedule;
}