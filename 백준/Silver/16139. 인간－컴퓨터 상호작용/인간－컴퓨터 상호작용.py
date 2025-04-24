import sys 
input = sys.stdin.readline

target = input().strip()
n = int(input().strip())
queries = [input().strip().split() for _ in range(n)]
arr = [[0] * (len(target) + 1) for _ in range(26)]

for i, char in enumerate(target):
    # 그 전의 값으로 누적합 업데이트
    for k in range(26):
        arr[k][i + 1] = arr[k][i]
    arr[ord(char) - 97][i+1] += 1

for char, l, r in queries:
    l = int(l)
    r = int(r)
    idx = ord(char) - 97
    print(arr[idx][r+1] - arr[idx][l])