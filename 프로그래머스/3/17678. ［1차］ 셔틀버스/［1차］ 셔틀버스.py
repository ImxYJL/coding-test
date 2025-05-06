def solution(n, t, m, timetable):
    def convertTime(string):
        h, m = string.split(':')
        return int(h) * 60 + int(m)

    def convertStringTime(num):
        h = num // 60
        m = num % 60
        return f"{h:02d}:{m:02d}"

    timetable = sorted([convertTime(time) for time in timetable])
    busTimes = [540 + i * t for i in range(n)]

    timeIdx = 0
    lastBoarded = -1

    for i in range(n):
        curTime = busTimes[i]
        curCnt = 0

        # 해당 버스 시간 내에 탑승 가능한 크루들 태우기
        while curCnt < m and timeIdx < len(timetable) and timetable[timeIdx] <= curTime:
            lastBoarded = timetable[timeIdx]
            timeIdx += 1
            curCnt += 1

    # 마지막 버스가 여유가 있으면 그냥 그 시간에 오면 됨
    if curCnt < m:
        return convertStringTime(busTimes[-1])
    else:
        return convertStringTime(lastBoarded - 1)
