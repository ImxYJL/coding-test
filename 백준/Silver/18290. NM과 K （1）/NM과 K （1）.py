import sys 
from itertools import combinations
input = sys.stdin.readline

n, m, k = map(int, input().strip().split())
arr = [list(map(int, input().split())) for _ in range(n)]
visited = [[False] * m for _ in range(n)]

dx = [0,1,0,-1]
dy = [1,0,-1, 0]

indices = [(r, c) for r in range(n) for c in range(m)]

maxSum = -float('inf')

def func(startIdx, count, curSum):
    global maxSum

    if k == count:
        maxSum = max(curSum, maxSum)
        return

    for i in range(startIdx, n*m):
        x, y = indices[i]

        # if visited[x][y]:
        #     continue

        isAdj = False
        for dir in range(4):
            nx, ny = x + dx[dir], y + dy[dir]
            
            if 0 <= nx < n and 0 <= ny < m:
                if visited[nx][ny]:
                    isAdj = True
                    break

        if not isAdj:
            visited[x][y] = True
            func(i + 1, count + 1, curSum + arr[x][y])
            visited[x][y] = False 

func(0,0,0)
print(maxSum)