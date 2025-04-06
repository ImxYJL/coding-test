import sys
input = sys.stdin.readline
from bisect import bisect_left

n, m = map(int, input().strip().split())
titleNames = []
titleLevels = []
lastLevel = -1
ans = []

for _ in range(n):
    name, level = input().split()
    level = int(level)

    if level != lastLevel:
        titleNames.append(name)
        titleLevels.append(level)
        lastLevel = level

for _ in range(m):
    userLevel = int(input())
    idx = bisect_left(titleLevels, userLevel)
    ans.append(titleNames[idx])

print('\n'.join(map(str, ans)))