import sys 
from collections import deque
input = sys.stdin.readline

n, m = map(int, input().strip().split())
adj = [[] for _ in range(n+1)]
degs = [0] * (n+1)

for _ in range(m):
    v1, v2 = map(int, input().strip().split())
    adj[v1].append(v2)
    degs[v2] += 1

q= deque()
ans = []
for i in range(1, n+1):
    if degs[i] == 0:
        q.append(i)

while q:
    curV = q.popleft()
    ans.append(curV)

    for nextV in adj[curV]:
        degs[nextV] -= 1
        if degs[nextV] == 0:
            q.append(nextV)

print(*ans)