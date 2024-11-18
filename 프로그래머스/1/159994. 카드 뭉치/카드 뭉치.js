function solution(cards1, cards2, goal) {
    let res = true;
    
    goal.forEach(word =>{
       if(cards1[0] === word) cards1.shift();
       else if(cards2[0] === word) cards2.shift();
        else res = false;
    });
    
    return res ? "Yes" : "No";
}