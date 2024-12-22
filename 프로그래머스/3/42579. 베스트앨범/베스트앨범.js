function solution(genres, plays) {
    const genreMap = new Map();
    // 오 ! 하나만 하면 안되는군...
    genres.forEach(genre => !!genreMap.has(genre) || genreMap.set(genre, []));
    
    plays.forEach((play, idx)=>{
        const genre = genres[idx];
        const musicList = genreMap.get(genre);
        musicList.push([idx, play]);
    });
    
    console.log(genreMap);
    
    // 장르 순서 정하기
    const sumList = [];
    genreMap.forEach((value, key)=>{
        //console.log([...value.values()]); // 2차원 배열
        const sum = [...value.values()].reduce((prev, cur) => prev +cur[1], 0);
        sumList.push([key, sum]);
    });
    
    sumList.sort((a, b) => b[1] - a[1]); // 내림차순으로 [장르, 합계]
    
    const orderList = sumList.map(sumInfo => sumInfo[0]); // 장르만 들어있음
    
    // 상위 2개씩 뽑아서 재생 리스트 만들기 (흠;;)
    const answerList = [];
    orderList.forEach(order =>{
       const m = genreMap.get(order);
       // m.sort((a, b) => b[1] - a[1]); // 재생 횟수 정렬 (내림차)
       //  m.sort((a, b) => a[0] - b[0]); // 고유 번호순 정렬? (오름차)
        m.sort((a, b) => {
    if (b[1] !== a[1]) {
        return b[1] - a[1]; // [1] 값 기준 내림차순
    } else {
        return a[0] - b[0]; // [0] 값 기준 오름차순
    }
});
        
       if (m.length >= 2) {
            answerList.push(m[0][0]);
            answerList.push(m[1][0]);
        } else if (m.length === 1) {
            answerList.push(m[0][0]);
        }
    });
    
    return(answerList);
}