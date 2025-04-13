import sys
input = sys.stdin.readline

x, y = map(int, input().strip().split())
bd = [list(input().strip()) for _ in  range(x)]

dx = [1,-1,0,0]
dy = [0,0,-1,1]
ans = [['.' for _ in range(y)] for _ in range(x)]

def isToDisappear(curX,curY):
    seaCount = 0
    for dir in range(4):
        nx = curX + dx[dir]
        ny = curY + dy[dir]

        if  (nx < 0 or nx >= x or ny <0 or ny >=y) or bd[nx][ny] == '.' :
            seaCount +=1
    return seaCount >= 3

for i in range(x):
    for k in range(y):
        if bd[i][k] == 'X':
            if not isToDisappear(i,k):
                ans[i][k] = 'X'
    

minX, minY, maxX, maxY = x, y, 0, 0
for i in range(x):
    for k in range(y):
        if ans[i][k] == 'X':
            minX = min(minX, i)
            minY = min(minY, k)
            maxX = max(maxX, i)
            maxY = max(maxY, k)

for i in range(minX, maxX + 1):
    print(''.join(ans[i][minY:maxY+1]))