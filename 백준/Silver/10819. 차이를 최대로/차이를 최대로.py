import sys 
from itertools import permutations
input = sys.stdin.readline

n = int(input().strip())
arr = list(map(int, input().strip().split()))

maxSum = 0
for comb in permutations(arr):
    curSum = 0
    for idx in range(n-1):
        sub = abs(comb[idx] - comb[idx+1])
        curSum += sub

    maxSum = max(curSum, maxSum)

print(maxSum)