import sys 
input = sys.stdin.readline

n = int(input().strip())
arr = list(map(int, input().strip().split()))
sums = [arr[0]]

for i in range(1, n):
    sums.append(sums[i-1] + arr[i])

ans = 0
for i in range(n):
    ans += arr[i] * (sums[n-1] - sums[i])

print(ans)