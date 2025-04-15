import sys 
input = sys.stdin.readline

n, m = map(int, input().strip().split())
arr = list(map(int, input().strip().split()))
arr.sort()

start = 1
end = max(arr) + 1
ans = 0

while start < end:
    mid = (start + end) // 2
    lenSum = 0

    for tree in arr:
        if tree > mid:
            lenSum += tree - mid

    if lenSum < m:
        end = mid
    else:
        ans = mid
        start = mid + 1
        
print(ans)