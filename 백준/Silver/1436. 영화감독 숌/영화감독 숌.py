import sys 
from itertools import combinations
input = sys.stdin.readline

n = int(input().strip())

cur_num = 666
cnt = 1

while(True):
    if cnt == n:
        print(cur_num)
        break

    cur_num += 1
    if '666' in str(cur_num):
        cnt += 1