import sys
input = sys.stdin.readline

n, k = map(int, input().split())
arr = list(map(int, input().split()))

count = [0] * 100001
startIdx = 0
endIdx = 0
maxLen = 0

while startIdx < n:
    # 수가 k번 미만일 때만 endIdx 확장
    while endIdx < n and count[arr[endIdx]] < k:
        count[arr[endIdx]] += 1
        endIdx += 1

    maxLen = max(maxLen, endIdx - startIdx)

    count[arr[startIdx]] -= 1
    startIdx += 1

print(maxLen)