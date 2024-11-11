function solution(name, yearning, photo) {
    const yearningMap = new Map();
    for(let i=0; i<name.length; i++){
        yearningMap.set(name[i], yearning[i]);
    }
    
    const ans = [];
    
    photo.forEach(nameList => {
       ans.push(nameList.reduce((acc, name) => acc + (yearningMap.get(name) || 0), 0));
    })
    
    return ans;
}