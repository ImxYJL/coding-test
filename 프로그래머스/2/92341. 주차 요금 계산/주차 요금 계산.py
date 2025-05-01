from collections import defaultdict
import math

def solution(fees, records):
    
    def parseTime(string):
        h, m = string.split(':')
        return int(h) * 60 + int(m)
    
    def calculateTime(str1, str2):
        return parseTime(str2) - parseTime(str1)

    ans = []
    dict = defaultdict(list)
    for item in records:
        time, num, _ = item.split() 
        dict[num].append(time)
    
    # 각 차량별로 요금 계산 -> 차량 번호가 작은 자동차부터 접근
    keys = sorted(dict.keys())
    for key in keys:
        infos = dict[key]
        isOut = len(infos) % 2 == 0 # 최총 출차 기록이 있는지?
        
        if not isOut: 
            dict[key].append('23:59')
        
        totalTime = 0
        curIdx = 1
        while curIdx < len(infos):
            totalTime += calculateTime(infos[curIdx-1], infos[curIdx])
            curIdx += 2
        
        # 요금 계산
        if totalTime > fees[0]:
            # 추가 요금 계산
            overTime = totalTime - fees[0]
            plusFee = math.ceil(overTime / fees[2]) * fees[3]
            ans.append(fees[1] + plusFee)
        else:
            ans.append(fees[1])
            
    print(ans)
    return ans