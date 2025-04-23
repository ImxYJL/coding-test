import sys 
input = sys.stdin.readline

n = int(input().strip())
arr = list(map(int, input().strip().split()))
arr = [0] + arr
k = int(input().strip())
students = [list(map(int, input().split())) for _ in range(k)]

def light(idx):
    if arr[idx] == 0:
        arr[idx] = 1
    else:
        arr[idx] = 0

def girl(num):
    light(num)
    left = num -1
    right = num + 1

    while left >= 1 and right <= n:
        if arr[left] == arr[right]:
            light(left)
            light(right)
            left -= 1
            right += 1
        else:
            break

def boy(num):
    count = 1
    while count * num <= n:
        light(count * num)
        count += 1

for sex, num in students:
    if sex == 1:
        boy(num)
    else:
        girl(num)

i = 1
while i <= n:
    print(' '.join(map(str, arr[i:i+20])))
    i += 20