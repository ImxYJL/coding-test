import sys
import math
input = sys.stdin.readline

g = int(input().strip())
ans = []

for a in range(1, 50002):
    b2 = a * a - g
    if b2 <=0:
        continue

    b = int(math.sqrt(b2))
    if b * b == b2:
        ans.append(a)

print('\n'.join(map(str, ans)) if len(ans) > 0 else -1)