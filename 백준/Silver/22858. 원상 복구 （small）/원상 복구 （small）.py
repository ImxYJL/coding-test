import sys 
input = sys.stdin.readline

n, k = map(int, input().strip().split())
S = list(map(int, input().strip().split()))
D = list(map(int, input().strip().split())) # 포인터 배열

cur_s = S[:]
prev_s = [0] * n

for _ in range(k):
    for i in range(n):
        prev_s[D[i]-1] = cur_s[i]

    cur_s = prev_s[:]

print(*(cur_s))