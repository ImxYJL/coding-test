import sys 
input = sys.stdin.readline

n, d, k, c = map(int, input().strip().split())
arr = [int(input()) for _ in range(n)]

uniqueCnt = 0
cnt = [0] * (d+1)
for i in range(k):
    if cnt[arr[i]] == 0:
        uniqueCnt += 1
    cnt[arr[i]] += 1

if cnt[c] == 0:
    uniqueCnt += 1
cnt[c] += 1

maxCnt = uniqueCnt

for i in range(1, n):
    cnt[arr[i-1]] -= 1
    if cnt[arr[i-1]] == 0:
        uniqueCnt -= 1

    end = arr[(i+k-1) % n]
    if cnt[end] == 0:
        uniqueCnt +=1 
    cnt[end] += 1

    maxCnt = max(maxCnt, uniqueCnt)

print(maxCnt)  