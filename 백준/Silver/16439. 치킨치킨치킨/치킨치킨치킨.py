import sys 
from itertools import combinations
input = sys.stdin.readline

n, m = map(int, (input().strip().split(' ')))

satisfactions = [list(map(int, input().strip().split())) for _ in range(n)]
indices = range(m)

maxSatisfaction = 0
for case in combinations(indices, 3):
    curSum = 0

    for i in range(n):
        curSatis = max(satisfactions[i][case[0]],
                      satisfactions[i][case[1]],
                      satisfactions[i][case[2]]
                   )
        curSum += curSatis

    maxSatisfaction = max(curSum, maxSatisfaction)

print(maxSatisfaction)