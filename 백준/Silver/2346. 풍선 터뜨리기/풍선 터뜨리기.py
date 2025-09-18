import sys 
input = sys.stdin.readline

n = int(input().strip())
q = [int(x) for x in input().split()]

ans = []
curIdx = 0

while(True):
    # 사전정보 기록
    ans.append(curIdx + 1)
    if len(ans) == n:
        break
            
    dir = 1 if q[curIdx] > 0 else -1
    move = abs(q[curIdx])

    # 터트리기
    q[curIdx] = 0

    # 이동하기(0인 것은 제외)
    while(move):
        curIdx = (curIdx + dir) % n
        if q[curIdx] != 0:
            move -= 1

print(' '.join(map(str, ans)))