import sys
from collections import deque

input = sys.stdin.readline

N, K = map(int, input().split())
durabilities = deque(list(map(int, input().split())))
robots = deque([0] * N)

level = 0

while True:
    level += 1

    # 벨트 회전
    durabilities.rotate(1)
    robots.rotate(1)

    # 회전 후 마지막에 도달하면 내리기!!!
    if robots[N - 1] == 1:
        robots[N - 1] = 0

    # 로봇 이동 (가장 먼저 올라간 로봇부터)
    # 내리는 위치 바로 전(N-2)부터 시작까지 역순으로 돌기
    for i in range(N - 2, -1, -1):
        if robots[i] == 1 and robots[i + 1] == 0 and durabilities[i + 1] >= 1:
            robots[i] = 0
            robots[i + 1] = 1
            durabilities[i + 1] -= 1

    # 로봇 내리기 
    if robots[N - 1] == 1:
        robots[N - 1] = 0

    # 로봇 올리기
    if durabilities[0] > 0:
        robots[0] = 1
        durabilities[0] -= 1

    if durabilities.count(0) >= K:
        break

print(level)