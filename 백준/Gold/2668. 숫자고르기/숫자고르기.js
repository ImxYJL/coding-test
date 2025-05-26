const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const N = +input[0];
const graph = Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
  graph[i] = +input[i];
}

const result = [];
const visited = Array(N + 1).fill(false);

const dfs = (startV, curV, path) =>{
  if (visited[curV]) {
    // 이미 방문했던 노드인데 사이클의 시작점(start)과 같다면 사이클 성립
    if (path.includes(curV) && curV === startV) result.push(...path);
    return;
  }

  visited[curV] = true;
  path.push(curV);
    
  dfs(startV, graph[curV], path);
    
  path.pop();
  visited[curV] = false; // 다른 탐색을 위해 초기화 (중복 방지용은 X)
}

for (let i = 1; i <= N; i++) dfs(i, i, []);

// 중복 제거 + 정렬
const unique = Array.from(new Set(result)).sort((a, b) => a - b);

console.log(unique.length);
console.log(unique.join('\n'));