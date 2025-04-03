from collections import deque

n, k = map(int, input().split())
q = deque(range(1, n + 1))
ans = []

while q:
    rotate = (k - 1) % len(q)
    for _ in range(rotate):
        q.append(q.popleft())
    ans.append(q.popleft())

print("<" + ", ".join(map(str, ans)) + ">")