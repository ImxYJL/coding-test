function solution(number) {
    // const isUsed = Array(number.length).fill(false);
    let cnt = 0;
    const len = number.length;
    
    const func = (start, step, arr)=>{
      if(step===3){
          if(arr.reduce((prev, sum)=> {return prev+sum},0) === 0 ) cnt++;
        return;
      }  
    
        for(let i=start; i<len; i++){
            func(i+1, step+1 ,[...arr, number[i]]);
        }
    
    
    };

    func(0, 0, []);
    
    return cnt;
}