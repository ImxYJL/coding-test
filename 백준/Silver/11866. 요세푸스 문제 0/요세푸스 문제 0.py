import sys
from collections import deque
input = sys.stdin.readline

n, k = map(int, input().strip().split())
q = deque()
ans = []

for i in range(1, n+1):
    q.append(i)

while q:
    cnt = k
    while cnt > 1 :
        q.append(q.popleft())
        cnt -= 1
        
    ans.append(q.popleft())

print("<" + ", ".join(map(str, ans)) + ">")