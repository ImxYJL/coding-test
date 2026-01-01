import sys 
input = sys.stdin.readline

n, k = map(int, input().strip().split())
arr = list(map(int, input().strip().split()))

max_sum = sum(arr[0:k])
cur_sum = max_sum

for i in range(1, n-k+1):
    cur_sum -= arr[i-1]
    cur_sum += arr[k+i-1]
    max_sum = max(max_sum, cur_sum)

print(max_sum)