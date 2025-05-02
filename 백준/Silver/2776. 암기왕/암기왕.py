import sys
from collections import defaultdict
input = sys.stdin.readline

T = int(input())

for _ in range(T):
    n = int(input())
    yeon = set(map(int, input().split()))  # ✅ set으로 빠르게 존재 확인

    m = int(input())
    dong = list(map(int, input().split()))

    output = ['1' if num in yeon else '0' for num in dong]
    print('\n'.join(output)) 