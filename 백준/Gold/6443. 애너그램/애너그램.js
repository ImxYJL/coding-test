const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const T = Number(input[0]);
const answers = [];

for (let t = 1; t <= T; t++) {
  const str = input[t].trim().split('').sort(); 
  const used = Array(str.length).fill(false);
  const path = [];
  const result = [];

  const bt = () => {
    if (path.length === str.length) {
      result.push(path.join(''));
      return;
    }

    for (let i = 0; i < str.length; i++) {
      if (used[i]) continue;
      if (i > 0 && str[i] === str[i - 1] && !used[i - 1]) continue;

      used[i] = true;
      path.push(str[i]);
        
      bt();
        
      path.pop();
      used[i] = false;
    }
  };

  bt();
  answers.push(...result);
}

console.log(answers.join('\n'));