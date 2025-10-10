import sys 
from collections import deque
input = sys.stdin.readline

w,h = map(int, input().strip().split())
bd = [[0] * (w + 2) for _ in range(h+2)]

for i in range(1, h+1):
    bd[i][1:w+1] = list(map(int, input().strip().split()))

cnt = 0
vis = [[-1] * (w + 2) for _ in range(h+2)]

oddDx =[-1, -1, 0, 1, 1, 0]
oddDy = [0, 1, 1, 1, 0, -1]

evenDx = [-1, -1, 0, 1, 1, 0]
evenDy = [-1, 0, 1, 0, -1, -1]

def bfs(startX, startY):
    global cnt
    q = deque()
    
    q.append((startX, startY))
    vis[startX][startY] = 1

    while len(q):
        curX, curY = q.popleft()

        #if vis[curX][curY] > 0:
        #    continue
        
        for dir in range(6):
            dx, dy = 0, 0
            
            if curX % 2 == 0:
                nx = curX + evenDx[dir]
                ny = curY + evenDy[dir]
            else:
                nx = curX + oddDx[dir]
                ny = curY + oddDy[dir]

            if (nx >= h+2 or nx < 0 or ny >= w+2 or ny < 0):
               continue

            if vis[nx][ny] == 1:
                continue
                
            if bd[nx][ny] == 1:
                cnt += 1
            else:
                q.append((nx, ny))
                vis[nx][ny] = 1

bfs(0,0)

print(cnt)