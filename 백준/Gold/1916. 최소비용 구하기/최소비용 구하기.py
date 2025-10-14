import sys 
import heapq
from itertools import combinations
input = sys.stdin.readline

n = int(input().strip())
m = int(input().strip())
adj = [[] for _ in range(n+1)]
dis = [float('inf')] * (n+1)
pq = []

for _ in range(m):
    v1, v2, d = map(int, input().strip().split())
    adj[v1].append((d, v2))

startV, endV = map(int, input().strip().split())

heapq.heappush(pq, (0, startV))
dis[startV] = 0

while pq:
    curD, curV = heapq.heappop(pq)
        
    if dis[curV] == curD:
        for nextItem in adj[curV]:
            nextD, nextV = nextItem
            newD = dis[curV] + nextD
            
            if dis[nextV] > newD:
                dis[nextV] = newD
                heapq.heappush(pq, (newD, nextV))

print(dis[endV])