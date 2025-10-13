import sys 
from collections import deque
input = sys.stdin.readline

t = int(input().strip())

for _ in range(t):
    n, k = map(int, input().strip().split())
    adj = [[] for _ in range(n+1)]
    indegrees = [0] * (n+1)
        
    times = [0] + list(map(int, input().split()))
    for _ in range(k):
        v1, v2 = map(int, input().strip().split())
        adj[v1].append(v2)
        indegrees[v2] += 1
            
    w = int(input().strip())
    q = deque()
    dp = [0] * (n+1) # i번 건물을 짓는 데 걸리는 시간

    for i in range(1, n+1):
        if indegrees[i] == 0:
            q.append(i)
            dp[i] = times[i]

    while q:
        curV = q.popleft()

        for nextV in adj[curV]:
            dp[nextV] = max(dp[curV] + times[nextV], dp[nextV])
            indegrees[nextV] -= 1
            
            if indegrees[nextV] == 0:
                q.append(nextV)
                
    print(dp[w])