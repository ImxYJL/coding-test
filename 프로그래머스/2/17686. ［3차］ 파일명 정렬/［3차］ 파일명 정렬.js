function solution(files) { 
    return files.sort((a, b) => {
        const [aHead, aNum] = a.match(/^(\D+)(\d+)/).slice(1, 3);
        const [bHead, bNum] = b.match(/^(\D+)(\d+)/).slice(1, 3);
        
        if (aHead.toLowerCase() > bHead.toLowerCase()) return 1 ;
        if (aHead.toLowerCase() < bHead.toLowerCase()) return -1 ;
        
        return Number(aNum) - Number(bNum);
   });
}