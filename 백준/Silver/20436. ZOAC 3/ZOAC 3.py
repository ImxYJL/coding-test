import sys 
from itertools import combinations
input = sys.stdin.readline

lChar, rChar = input().strip().split()
target = input().strip()

arr = [[] for _ in range(3)]
keys = [
    ['q', 'w', 'e', 'r', 't', 'y','u','i','o', 'p'],
    ['a', 's', 'd', 'f', 'g','h','j','k','l'],
    ['z','x', 'c', 'v', 'b','n','m']
]
for i in range(3):
    for k in range(len(keys[i])):
        arr[i].append(keys[i][k])

# print(arr)
dic = {}
for i, row in enumerate(arr):
    for k, value in enumerate(row):
        dic[value] = (i,k)
        # dic.add(value, (i,k)) # 안됨

curLeft, curRight = dic[lChar], dic[rChar]

lefts = set(['q', 'w', 'e', 'r', 't', 'a', 's', 'd', 'f', 'g', 'z','x', 'c', 'v'])

def isLeftChar(ch):
    return ch in lefts 

# 누르는 시간도 포함되어야 함~
curTime = 0
for ch in target:
    newL, newR = dic[ch]
    isLeft = isLeftChar(ch)

    distance = 0
    # 이동
    if(isLeft):
        curL, curR = curLeft
        distance = abs(curL - newL) + abs(curR - newR)
        curLeft = (newL, newR)
    else:
        curL, curR = curRight
        distance = abs(curL - newL) + abs(curR - newR)
        curRight = (newL, newR)

    curTime += distance
    
    # 누르기
    curTime += 1

print(curTime)