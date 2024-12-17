function solution(nums) {
    let cnt = 0;
    const len = nums.length / 2;

    const cntMap = nums.reduce((prev, num) => {
        if (!prev.has(num)) {
            prev.set(num, 0);
        }
        prev.set(num, prev.get(num) + 1);
        return prev;
    }, new Map());

    for (const [key, value] of cntMap) {
        const curValue = cntMap.get(key);

        if (curValue > 0) {
            cntMap.set(key, curValue - 1); 
            cnt++;
            if (cnt === len) return cnt;
        }
    }

    return cnt;
}
