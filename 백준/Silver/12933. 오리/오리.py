import sys
input = sys.stdin.readline

sound = input().strip()

quack = 'quack'
status = [0] * 5
duckCount = 0

for ch in sound:
    idx = quack.find(ch)

    # q인 경우 
    if idx == 0:
        # k가 남아있다 => 어떤 오리가 울음을 마친 상황 => 최소 카운트를 위해서는 기존 오리의 새 울음으로 봐야 함
        if status[4] > 0 :
            status[4] -= 1
        # 남은 k가 없다 => q는 새 오리의 울음임 => 오리 카운트 증가
        else:
            duckCount += 1
        # 공통 로직: q의 카운트 증가
        status[0] += 1
    
    # 그 외의 경우 
    else:
        if status[idx -1] > 0:
            status[idx-1] -= 1
            status[idx] += 1
        else:
            print(-1)
            exit()

if any(status[:4]):
    print(-1)
else:
    print(duckCount)   