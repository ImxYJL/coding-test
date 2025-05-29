function solution(board) {
  const winCases = [
    [ [0, 0], [0, 1], [0, 2] ],
    [ [1, 0], [1, 1], [1, 2] ],
    [ [2, 0], [2, 1], [2, 2] ],
    [ [0, 0], [1, 0], [2, 0] ],
    [ [0, 1], [1, 1], [2, 1] ],
    [ [0, 2], [1, 2], [2, 2] ],
    [ [0, 0], [1, 1], [2, 2] ],
    [ [0, 2], [1, 1], [2, 0] ],
  ];

  const isWin = (char) => {
    return winCases.some(line =>
      line.every(([x, y]) => board[x][y] === char)
    );
  };

  let oCnt = 0, xCnt = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === 'O') oCnt++;
      if (board[i][j] === 'X') xCnt++;
    }
  }

  const oWin = isWin('O');
  const xWin = isWin('X');

  // 1. 기본 수 불일치
  if (oCnt < xCnt || oCnt > xCnt + 1) return 0;

  // 2. 동시에 승리한 경우
  if (oWin && xWin) return 0;

  // 3. O 승리 시 조건 불일치
  if (oWin && oCnt !== xCnt + 1) return 0;

  // 4. X 승리 시 조건 불일치
  if (xWin && oCnt !== xCnt) return 0;

  // 5. 그 외는 유효한 상태
  return 1;
}
