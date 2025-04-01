import sys
input = sys.stdin.readline

n, x = map(int, input().split())
arr = list(map(int, input().split()))
ans = []

startIdx = 0
endIdx = x-1

while(startIdx < n and endIdx < n):
    lastSum = 0
        
    if startIdx == 0:
        curSum = sum(arr[startIdx:endIdx+1])
    else:
        curSum = curSum - arr[startIdx - 1] + arr[endIdx]

    ans.append(curSum)

    startIdx += 1
    endIdx += 1

max = max(ans)
count = ans.count(max)

if max == 0:
    print('SAD')
else:
    print(max)
    print(count)