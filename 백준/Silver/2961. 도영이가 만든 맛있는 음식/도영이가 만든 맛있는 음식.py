import sys, math
from itertools import combinations
input = sys.stdin.readline

n = int(input().strip())
cooks = [list(map(int, input().strip().split())) for _ in range(n)]

minAbs = float('inf')
indices = range(n)

for i in range(1, n+1):
    for case in combinations(cooks, i):        
        sList, bList = zip(*case)
        S = math.prod(sList)
        B = sum(bList)
        
        minAbs = min(minAbs, abs(S-B))

print(minAbs)