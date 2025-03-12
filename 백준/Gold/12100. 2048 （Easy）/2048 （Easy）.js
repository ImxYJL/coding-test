const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');
const n = Number(input[0]);
const bd = input.slice(1).map(line => line.split(' ').map(Number));

const getMax = (bd) => Math.max(...bd.flat());

const moveRight = (board) => {
    let bd = board.map(row => [...row]);
    let check = Array.from({ length: n }, () => Array(n).fill(false));

    for (let i = 0; i < n; i++) {
        for (let j = n - 2; j >= 0; j--) {
            if (bd[i][j] === 0) continue;
            
            for (let k = j + 1; k < n; k++) {
                if (bd[i][k] === bd[i][k - 1] && !check[i][k]) {
                    bd[i][k] *= 2;
                    bd[i][k - 1] = 0;
                    check[i][k] = true;
                    break;
                } else if (bd[i][k] === 0) {
                    bd[i][k] = bd[i][k - 1];
                    bd[i][k - 1] = 0;
                } else break;
            }
        }
    }
    return bd;
};

const moveLeft = (board) => {
    let bd = board.map(row => [...row]);
    let check = Array.from({ length: n }, () => Array(n).fill(false));

    for (let i = 0; i < n; i++) {
        for (let j = 1; j < n; j++) {
            if (bd[i][j] === 0) continue;
            
            for (let k = j - 1; k >= 0; k--) {
                if (bd[i][k] === bd[i][k + 1] && !check[i][k]) {
                    bd[i][k] *= 2;
                    bd[i][k + 1] = 0;
                    check[i][k] = true;
                    break;
                } else if (bd[i][k] === 0) {
                    bd[i][k] = bd[i][k + 1];
                    bd[i][k + 1] = 0;
                } else break;
            }
        }
    }
    return bd;
};

const moveDown = (board) => {
    let bd = board.map(row => [...row]);
    let check = Array.from({ length: n }, () => Array(n).fill(false));

    for (let i = 0; i < n; i++) {
        for (let j = n - 2; j >= 0; j--) {
            if (bd[j][i] === 0) continue;
            
            for (let k = j + 1; k < n; k++) {
                if (bd[k][i] === bd[k - 1][i] && !check[k][i]) {
                    bd[k][i] *= 2;
                    bd[k - 1][i] = 0;
                    check[k][i] = true;
                    break;
                } else if (bd[k][i] === 0) {
                    bd[k][i] = bd[k - 1][i];
                    bd[k - 1][i] = 0;
                } else break;
            }
        }
    }
    return bd;
};

const moveUp = (board) => {
    let bd = board.map(row => [...row]);
    let check = Array.from({ length: n }, () => Array(n).fill(false));

    for (let i = 0; i < n; i++) {
        for (let j = 1; j < n; j++) {
            if (bd[j][i] === 0) continue;
            for (let k = j - 1; k >= 0; k--) {
                if (bd[k][i] === bd[k + 1][i] && !check[k][i]) {
                    bd[k][i] *= 2;
                    bd[k + 1][i] = 0;
                    check[k][i] = true;
                    break;
                } else if (bd[k][i] === 0) {
                    bd[k][i] = bd[k + 1][i];
                    bd[k + 1][i] = 0;
                } else break;
            }
        }
    }
    return bd;
};

let max = 0;
const dfs = (depth, board) => {
    max = Math.max(max, getMax(board));
    if (depth === 5) return;

    let moves = [moveRight, moveLeft, moveUp, moveDown];
    for (let move of moves) {
        let newBoard = move(board.map((row) => [...row]));
        dfs(depth + 1, newBoard);
    }
};

dfs(0, bd);
console.log(max);