def solution(sequence, k):
    tmp = []
    s = [0] * len(sequence)
    s[0] = sequence[0]

    def calculateSum(startI, endI):
        return s[endI] - (s[startI - 1] if startI > 0 else 0)

    for i in range(1, len(sequence)):
        s[i] = s[i - 1] + sequence[i]

    startI = 0
    endI = 0

    while startI < len(sequence) and endI < len(sequence):
        curSum = calculateSum(startI, endI)

        if curSum < k:
            endI += 1
        elif curSum > k:
            startI += 1
        else:
            tmp.append([startI, endI])
            endI += 1  # 이거 안하면 무한반복 위험

        if startI > endI:  # 🔥 핵심 방어 코드
            endI = startI

    
    finStart = 0;
    finEnd = 0;
    min = float('inf');
    for i in range (len(tmp)):
        st, en = tmp[i];
        if en - st < min:
            finStart = st
            finEnd = en
            min = en -st
        
    return([finStart, finEnd])
