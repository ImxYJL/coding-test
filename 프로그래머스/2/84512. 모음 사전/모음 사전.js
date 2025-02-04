function solution(word) {
    const dic = ['A', 'E', 'I', 'O', 'U'];
    const curWordArr = [];
    
    const bt = (curStr) => {
      if(curStr.length > 5) return;
        
      curWordArr.push(curStr);
      
      for(let i=0; i<5; i++) bt(curStr + dic[i]);  
    };
    
    bt("");
    
    return curWordArr.indexOf(word)
}