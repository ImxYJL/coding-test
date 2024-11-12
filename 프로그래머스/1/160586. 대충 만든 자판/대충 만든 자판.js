function solution(keymap, targets) {
    const result = [];
    const len = keymap.length;
    
    targets.forEach((str) => {
        let cnt = 0; 

        for (let i = 0; i < str.length; i++) {
            let minSteps = Infinity;
            
            for (let k = 0; k < len; k++) {
                const searchedIdx = [...keymap[k]].findIndex((c) => c === str[i]);
                
                if (searchedIdx >= 0) {
                    minSteps = Math.min(minSteps, searchedIdx + 1); // 인덱스가 0부터 시작하므로 +1
                }
            }
            if (minSteps === Infinity) {
                cnt = -1; // 해당 문자를 찾을 수 없을 경우 -1
                break;
            } else {
                cnt += minSteps;
            }
        }
        result.push(cnt);
    });
    return result;
}
