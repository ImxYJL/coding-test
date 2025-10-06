import sys 
from itertools import combinations
input = sys.stdin.readline

n, k = map(int, input().strip().split())
arr = list(map(int, input().strip().split()))

maxLen = 0
oddCnt = 0

startIdx = 0 
for endIdx in range(n):
    if arr[endIdx] % 2 != 0:
        oddCnt += 1

    while oddCnt > k:
        if arr[startIdx] % 2 != 0:
            oddCnt -= 1
        startIdx += 1
        
    maxLen = max(maxLen, endIdx - oddCnt - startIdx + 1)

print(maxLen)