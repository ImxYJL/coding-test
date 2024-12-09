function solution(babbling) {
    const wordList = ['aya', 'ye', 'woo', 'ma'];
    let cnt = 0;
    
    // 1. 반복 검사
    const nonDupList = babbling.filter(str =>{
        return wordList.every(word => !str.includes(word.repeat(2)));
    });

    nonDupList.forEach(str =>{
       if(str.match(/^(aya|ye|woo|ma)+$/)) cnt++;
    });
    
    return cnt;
}