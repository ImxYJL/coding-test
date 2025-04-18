import sys 
input = sys.stdin.readline

k, n = map(int, input().strip().split())
arr = [int(input()) for _ in range(k)]

def cut(length):
    return sum(x // length for x in arr)

start = 1;
end = max(arr) + 1
maxCount = 0

while(start < end):
    mid = (start + end) // 2
    cuttedLength = cut(mid)
    if n > cuttedLength: # 자른 것이 개수 기준에 못 미치는 경우 
        end = mid         # 더 많이 잘라야 하니까 자르는 개수를 낮춘다
    else:
        maxCount = mid;
        start = mid + 1

print(maxCount)    