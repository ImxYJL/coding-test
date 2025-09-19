import sys 
from collections import Counter
input = sys.stdin.readline

lines = sys.stdin.readlines()

for i in range(0, len(lines), 2):
    aStr = lines[i]
    bStr = lines[i+1]

    aCounter = Counter(aStr.strip())
    bCounter = Counter(bStr.strip())

    ansCounter = aCounter & bCounter
    res = sorted(ansCounter.elements())
    print("".join(res))