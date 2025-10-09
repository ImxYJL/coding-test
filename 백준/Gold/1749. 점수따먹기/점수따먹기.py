import sys 
from itertools import combinations
input = sys.stdin.readline

n, m = map(int, input().strip().split())
arr = [[0] * (m+1)]
for _ in range(n):
    row = [0] + list(map(int, input().split()))
    arr.append(row)
    
sum = [[0] * (m+1) for _ in range(n+1)]

def kadane(array):
    if not array:
        return 0
    
    curSum = array[1] # 음수가 있으므로 0으로 하면 안 됨!
    maxSum = -float('inf')

    for i in range(2, len(array)):
        num = array[i]
        
        curSum = max(curSum + num, num)
        maxSum = max(curSum, maxSum)
    
    return maxSum


maxSum = -float('inf')
for leftCol in range(1, m+1):
    curRowSum = [0] * (n+1)

    for rightCol in range(leftCol, m+1):
        for i in range(1, n+1):
            curRowSum[i] += arr[i][rightCol]
            
        curSum = kadane(curRowSum)
        maxSum= max(maxSum, curSum)
            
print(maxSum)