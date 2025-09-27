import sys 
sys.setrecursionlimit(10**6)
input = sys.stdin.readline

S = input().strip()
T = input().strip()

isPossible = 0
def func(curStr):
    global isPossible

    if curStr == S:
        isPossible = 1
        return
    if len(curStr) < len(S):
        return

    if len(curStr) > 0 and curStr[-1] == 'A':
        func(curStr[:-1])
    if len(curStr) > 0 and curStr[-1] == 'B':
        func(curStr[:-1][::-1])

func(T)
print(isPossible)