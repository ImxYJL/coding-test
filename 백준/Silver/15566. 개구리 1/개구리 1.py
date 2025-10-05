import sys
input = sys.stdin.readline

n, m = map(int, input().split())

# 개구리의 흥미도
frogInterests = [None] + [list(map(int, input().split())) for _ in range(n)]
# 개구리가 선호하는 연꽃
frogPreferences = [None] + [list(map(int, input().split())) for _ in range(n)]

# 연꽃 간 통나무 그래프
logs = [[] for _ in range(n + 1)]
for _ in range(m):
    v1, v2, topic = map(int, input().split())
    logs[v1].append((v2, topic))
    logs[v2].append((v1, topic))

# 인덱스: 연꽃 번호, 값: 개구리 번호
visited = [-1] * (n + 1)
isFound = False

def isSitable(frogIdx, leafIdx):
    for neighborLeafIdx, topic in logs[leafIdx]:
        if visited[neighborLeafIdx] != -1:
            neighborFrogIdx = visited[neighborLeafIdx]
            # 흥미도 일치 검사
            if frogInterests[frogIdx][topic - 1] != frogInterests[neighborFrogIdx][topic - 1]:
                return False
    return True


def dfs(frogIdx):
    global isFound
    
    if frogIdx > n:
        isFound = True
        print("YES")
        print(*visited[1:])
        
        return

    # 개구리별 선호 연꽃 탐색
    for leafIdx in frogPreferences[frogIdx]:
        if visited[leafIdx] == -1 and isSitable(frogIdx, leafIdx):
            visited[leafIdx] = frogIdx
            
            dfs(frogIdx + 1)
            if isFound:
                return
                
            visited[leafIdx] = -1

dfs(1)

if not isFound:
    print("NO")