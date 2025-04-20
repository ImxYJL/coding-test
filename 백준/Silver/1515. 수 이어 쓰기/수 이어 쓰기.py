import sys 
input = sys.stdin.readline

idx = 0
num = 1
target = input().strip()

while idx < len(target):
    for ch in str(num):
        if idx < len(target) and ch == target[idx]:
            idx += 1
    num += 1
        
print(num - 1)