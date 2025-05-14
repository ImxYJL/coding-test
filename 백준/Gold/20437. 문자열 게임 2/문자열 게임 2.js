const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const T = Number(input[0]);
const cases = [];
for(let i=1; i<input.length-1; i++){
    const str = input[i];
    const k = input[i+1];
    i++;
    cases.push([str, k]);
}

const getAnswer = (str, k) => {
    const arr = Array.from({length: 26}, () => []);
    for (let i = 0; i < str.length; i++) {
        arr[str[i].charCodeAt(0) - 97].push(i);
    }

    let minLen = Infinity;
    let maxLen = -1;

    for (let posList of arr) {
        if (posList.length < k) continue;

        for (let i = 0; i <= posList.length - k; i++) {
            const start = posList[i];
            const end = posList[i + k - 1];
            const len = end - start + 1;

            minLen = Math.min(minLen, len);
            maxLen = Math.max(maxLen, len);
        }
    }

    if (minLen === Infinity) return [-1, -1];
    return [minLen, maxLen];
};

for(let i=0; i<T; i++){
    const [str, k] = cases[i];
    const [ans1, ans2] = getAnswer(str, Number(k));

    if(ans1 === -1) console.log('-1');
    else console.log(ans1, ans2);
}