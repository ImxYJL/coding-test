import sys
from bisect import bisect_left, bisect_right
input = sys.stdin.readline

n, m = map(int, input().strip().split())
arr = list(map(int, input().strip().split()))
arr.sort()
ans = []

for _ in range(m):
    st, end = map(int, input().strip().split())
    ans.append(bisect_right(arr,end) - bisect_left(arr,st))

print('\n'.join(map(str, ans)))