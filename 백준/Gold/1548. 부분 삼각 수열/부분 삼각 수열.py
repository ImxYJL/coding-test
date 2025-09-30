import sys 
from itertools import combinations
input = sys.stdin.readline

n = int(input().strip())
arr = list(map(int, input().strip().split()))

arr.sort()

if len(arr) <= 2:
    print(len(arr))
else:
    maxLen = 2

    for i in range(n):
        for k in range(i+1, n):

            if k > i+1 and arr[i] + arr[i+1] > arr[k]:
                maxLen = max(maxLen, k-i+1)
    print(maxLen)