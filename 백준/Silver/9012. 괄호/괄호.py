import sys
from collections import deque
input = sys.stdin.readline

t = int(input().strip())
queries = [input().strip() for _ in range(t)]  

for s in queries:
    deq = deque()
    ok = True

    for ch in s:              
        if ch == '(':
            deq.append(1)
        elif ch == ')':
            if not deq:
                ok = False
                break
            deq.pop()

    print('YES' if ok and not deq else 'NO')