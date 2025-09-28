import sys 
input = sys.stdin.readline

S = input().strip()

# print('abab' - 'bab')

def isP(s):
    return s == s[::-1]

def findToAdd(s):
    ans = ''
    for i in range(len(s)):
        curStr = s[i:]
        if isP(curStr):
            ans =  s[:i]
            break
            
    return ans    

def main(s):
    if isP(s):
        return len(s)

    # else
    partial = findToAdd(s)
    return len(partial) + len(s)
   
print(main(S))           