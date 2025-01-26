function solution(answers) {
    const pattern1 = [1,2,3,4,5];
    const pattern2 = [2,1,2,3,2,4,2,5];
    const pattern3 = [3,3,1,1,2,2,4,4,5,5];
    
    const matches = [0,0,0];
    
    answers.forEach((ans, idx)=>{
        if(pattern1[idx % pattern1.length] === ans) matches[0]++;
        if(pattern2[idx % pattern2.length] === ans) matches[1]++;
        if(pattern3[idx % pattern3.length] === ans) matches[2]++;
    });
    
    const max = Math.max(...matches);
    const ans = [];
    
     matches.forEach((count, idx) => {
        if(max === count) ans.push(idx+1);
    });
    return ans;
}