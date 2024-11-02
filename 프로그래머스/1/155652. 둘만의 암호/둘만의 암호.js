function solution(s, skip, index) {
    const asciiMap = new Map();

    for (let i = 97; i <= 122; i++) { // 'a'는 97, 'z'는 122
        const c = String.fromCharCode(i);
        asciiMap.set(c, i);
    }
    
    const strArr = [...s];
    const resArr = [];
    
    strArr.forEach(c =>{
        let ascii = c.charCodeAt(0);
        let count = index;
        let nextChar;
        
        while(count > 0){
            let nextAscii = ascii + 1;
            if(nextAscii > 122) nextAscii = 97;
            
            nextChar = String.fromCharCode(nextAscii);
            //console.log(nextChar);
            if(!skip.includes(nextChar)){
                 count--;
            }
            ascii = nextAscii;
        }
        resArr.push(nextChar);
    });
    
    return resArr.join("");
}