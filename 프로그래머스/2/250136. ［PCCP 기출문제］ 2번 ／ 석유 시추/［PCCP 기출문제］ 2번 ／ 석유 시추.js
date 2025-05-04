class Q {
    constructor() {
        this.q = [];
        this.front = 0;
    }
    size() {
        return this.q.length - this.front;
    }
    add(v) {
        this.q.push(v);
    }
    remove() {
        return this.q[this.front++];
    }
}

function solution(land) {
    const n = land.length;
    const m = land[0].length;

    const vis = Array.from({ length: n }, () => Array(m).fill(false));
    const ids = Array.from({ length: n }, () => Array(m).fill(-1));
    const idToWidth = {};
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];
    let id = 0;

    const bfs = (i, j) => {
        const q = new Q();
        q.add([i, j]);
        let width = 0;

        while (q.size() > 0) {
            const [x, y] = q.remove();

            if (land[x][y] !== 1 || vis[x][y]) continue;

            vis[x][y] = true;
            ids[x][y] = id;
            width++;

            for (let d = 0; d < 4; d++) {
                const nx = x + dx[d];
                const ny = y + dy[d];

                if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
                if (land[nx][ny] !== 1 || vis[nx][ny]) continue;

                q.add([nx, ny]);
            }
        }

        idToWidth[id++] = width;
    };

    // BFS로 zone 탐색
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (land[i][j] === 1 && !vis[i][j]) bfs(i, j);
        }
    }

    // 열 기준 시추
    let maxWidth = 0;
    for (let col = 0; col < m; col++) {
        const seen = new Set();
        let total = 0;

        for (let row = 0; row < n; row++) {
            const zoneId = ids[row][col];
            if (zoneId !== -1 && !seen.has(zoneId)) {
                total += idToWidth[zoneId];
                seen.add(zoneId);
            }
        }

        maxWidth = Math.max(maxWidth, total);
    }

    return maxWidth;
}
