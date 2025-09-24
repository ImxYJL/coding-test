import sys 
from itertools import combinations
input = sys.stdin.readline

w, h = map(int, (input().strip().split(' ')))
cnt = int(input().strip())

stikers = [list(map(int, input().strip().split())) for _ in range(cnt)]
indices = range(cnt)

maxWidth = 0
for i, k in combinations(indices, 2):
    R1, C1 = stikers[i]
    R2, C2 = stikers[k]

    # r -> h, c -> w
    for r1, c1 in [(R1, C1), (C1, R1)]:
        for r2, c2 in [(R2, C2) , (C2, R2)]:
            curWidth = (R1 * C1) + (R2 * C2)
            # 가로 
            if r1 + r2 <= w and max(c1, c2) <= h:
                maxWidth = max(maxWidth, curWidth)

            # 세로
            if max(r1, r2) <=h and c1 + c2 <= w:
                maxWidth = max(maxWidth, curWidth)

            # 가로 
            if r1 + r2 <= h and max(c1, c2) <= w:
                maxWidth = max(maxWidth, curWidth)

            # 세로
            if max(r1, r2) <= w and c1 + c2 <= h:
                maxWidth = max(maxWidth, curWidth)
            
print(maxWidth)    