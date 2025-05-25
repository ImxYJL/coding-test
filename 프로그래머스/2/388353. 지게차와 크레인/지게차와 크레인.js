function solution(storage, requests) {
    const bd = storage.map(str => str.split(''));
    const x = bd.length;
    const y = bd[0].length;
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];

    const c = (char) => {
        for (let i = 0; i < x; i++) {
            for (let k = 0; k < y; k++) {
                if (bd[i][k] === char) bd[i][k] = null;
            }
        }
    };

    const g = (char) => {
        const q = [];
        const toDelete = [];
        const vis = Array.from({ length: x }, () => Array(y).fill(0));

        // 외곽 null 또는 문자 위치를 탐색 시작점으로 설정
        for (let i = 0; i < x; i++) {
            for (let k = 0; k < y; k++) {
                const isOutbound = i === 0 || i === x - 1 || k === 0 || k === y - 1;
                if(!isOutbound) continue;
                
                if (bd[i][k] === null) {
                    vis[i][k] = 1;
                    q.push([i, k]);
                } else if (bd[i][k] === char) {
                    toDelete.push([i, k]);
                }
            }
        }

        while (q.length) {
            const [cx, cy] = q.shift();

            for (let dir = 0; dir < 4; dir++) {
                const nx = cx + dx[dir];
                const ny = cy + dy[dir];

                if (nx < 0 || nx >= x || ny < 0 || ny >= y) continue;

                if (bd[nx][ny] === char && !vis[nx][ny]) {
                    toDelete.push([nx, ny]);
                    vis[nx][ny] = 1;
                }

                if (bd[nx][ny] === null && !vis[nx][ny]) {
                    vis[nx][ny] = 1;
                    q.push([nx, ny]);
                }
            }
        }

        toDelete.forEach(([i, j]) => bd[i][j] = null);
    };

    requests.forEach(req => {
        if (req.length === 1) g(req);     
        else c(req[0]);                   
    });

    let cnt = 0;
    for (let i = 0; i < x; i++) {
        for (let k = 0; k < y; k++) {
            if (bd[i][k] !== null) cnt++;
        }
    }
    return cnt;
}
