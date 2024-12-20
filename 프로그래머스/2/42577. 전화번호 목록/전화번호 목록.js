function solution(phone_book) {
    var answer = true;
    const numMap = new Map();
    
    phone_book.forEach(num => numMap.set(num, num));
    
    phone_book.forEach(num =>{
        const len = num.length;
        for(let i=0; i<len; i++){
            const str = num.slice(0, i); // 이거 처음에는 하나겠지?
            if(numMap.has(str)) {
                answer = false;
                break;
            }
        }
        if(!answer) return;
    })
    
    return answer;
}