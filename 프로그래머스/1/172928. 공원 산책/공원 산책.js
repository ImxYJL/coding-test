function solution(park, routes) {
    const h = park.length;
    const w = park[0].length;
   const curPos = [];
    
    park.forEach((path, idx) =>{
        [...path].forEach((p, i)=>{
           if(p === 'S') curPos.push(idx, i); 
        });
    });
    
    
   // console.log(park[0][0]);
   routes.forEach((route, idx) =>{
      const [dir, s] = route.split(" ");
      const step = Number(s);
       const [x, y] = curPos;
   
       let isValidStep = true;
       // k++
       if(dir === "E"){
           for(let i=1; i<=step; i++){
             if(y + i >=w || park[x][y + i] ==='X' ){
                 isValidStep = false;
                 break;
             }
           }
           if(isValidStep) curPos[1] +=  step;
       }
       // i++
       if(dir === "S"){
           for(let i=1; i<=step; i++){
             if(x + i >= h || park[x + i][y] ==='X' ){
                 isValidStep = false;
                 break;
             }
           }
           if(isValidStep) curPos[0] += step;
       }
       // k--
       if(dir==="W"){
           for(let i=1; i<=step; i++){
             if(y - i <0 || park[x][y - i] ==='X' ){
                 isValidStep = false;
                 break;
             }
           }
           if(isValidStep) curPos[1] -= step;
       }
       // i--
       if(dir==="N"){
           for(let i=1; i<=step; i++){
             if(x- i  <0 || park[x - i][y] ==='X' ){
                 isValidStep = false;
                 break;
             }
           }
           if(isValidStep) curPos[0] -= step;
       }
       
   });

    return curPos;    
}
