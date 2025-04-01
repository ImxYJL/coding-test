import sys
input = sys.stdin.readline

n, x = map(int, input().split())
arr = list(map(int, input().split()))

curSum = sum(arr[:x])
maxSum = curSum
count = 1

for i in range(x, n):
    curSum = curSum - arr[i - x] + arr[i]

    if curSum > maxSum:
        maxSum = curSum
        count = 1
    elif curSum == maxSum:
        count += 1

if maxSum == 0:
    print("SAD")
else:
    print(maxSum)
    print(count)
