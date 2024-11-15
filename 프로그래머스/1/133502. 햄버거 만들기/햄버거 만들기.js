function solution(ingredient) {
    // 1 빵, 2야채, 3고기
    let count =0;
    const stack = [];
    
    ingredient.forEach(ing=>{
        stack.push(ing);
        
        if(stack.slice(-4).join('') === '1231'){
            count++;
            stack.splice(-4);
        } 
    });
    
    return count;
}