import sys 
from itertools import combinations
input = sys.stdin.readline

n = int(input())
path = input()
cnt = 0

for i in range(n-1):
    if path[i] == 'E' and path[i+1] == 'W':
        cnt +=1
        
print(cnt)