n = int(input())
dic = {}
li = list(map(int, input().split()))

for item in li:
  if(item in dic):
    dic[item] += 1
  else:
    dic[item] = 1

m = int(input())
li2 = list(map(int, input().split()))
for m in li2:
  if(m in dic):
    print(dic[m], end = ' ')
  else:
    print(0, end = ' ')
  