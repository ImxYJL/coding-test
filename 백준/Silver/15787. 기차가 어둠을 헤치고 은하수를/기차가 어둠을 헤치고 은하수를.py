import sys 
input = sys.stdin.readline

n, m = map(int, input().split())
commands = [list(map(int, input().split())) for _ in range(m)]

trains = [[0] * 21 for _ in range(n + 1)]

for command in commands:
    command_num = command[0]  
    train_idx = command[1]    

    if command_num == 1:
        seat_idx = command[2]
        trains[train_idx][seat_idx] = 1
    elif command_num == 2:
        seat_idx = command[2]
        trains[train_idx][seat_idx] = 0
    elif command_num == 3:
        # 뒤로 밀기: 20번부터 2번까지 업데이트
        for personIdx in range(20, 1, -1):
            trains[train_idx][personIdx] = trains[train_idx][personIdx-1]
        trains[train_idx][1] = 0 
    elif command_num == 4:
        for personIdx in range(1, 20):
            trains[train_idx][personIdx] = trains[train_idx][personIdx+1]
        trains[train_idx][20] = 0 

s = set()
for i in range(1, n + 1):
    pattern = tuple(trains[i][1:])
    s.add(pattern)

print(len(s))