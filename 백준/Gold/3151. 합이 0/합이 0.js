const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

arr.sort((a, b) => a - b);

let count = 0;

for (let i = 0; i < n - 2; i++) {
  const target = -arr[i];
  let left = i + 1;
  let right = n - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      if (arr[left] === arr[right]) {
        const num = right - left + 1;
        count += (num * (num - 1)) / 2;
        break; 
      } else {
        let lCount = 1;
        let rCount = 1;

        while (left + 1 < right && arr[left] === arr[left + 1]) {
          lCount++;
          left++;
        }

        while (right - 1 > left && arr[right] === arr[right - 1]) {
          rCount++;
          right--;
        }

        count += lCount * rCount;
        left++;
        right--;
      }
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
}

console.log(count);