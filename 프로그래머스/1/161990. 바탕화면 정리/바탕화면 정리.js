function solution(wallpaper) {
    // 최소한의 이동거리를 갖는 한 번의 드래그로 모든 파일을 선택해 지우기
    // 배열 돌면서 파일 발견하면 탐색 거리 넓혀두면 될듯
    
    let [x1, y1, x2, y2] = [50, 50, 0, 0];
    
    wallpaper.forEach((row, i)=>{
        [...row].forEach((cell, t)=>{
           if(cell==='#'){
                x1 = Math.min(i, x1);
                y1 = Math.min(t, y1);
                x2 = Math.max(i, x2);
                y2 = Math.max(t,y2);
         }
        });
    });
    
   return [x1, y1, x2+1, y2+1];
}