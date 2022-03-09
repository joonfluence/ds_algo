x = int(input())

d = [0] * 30001

for i in range(2, x+1):
  # 1을 뺐을 때의 연산횟수
  d[i] = d[i-1] + 1
  if i % 2 == 0:
    # 1을 뺐을 때의 연산과 2로 나눴을 때의 연산 값 중 더 작은 값을 반환한다. 
    d[i] = min(d[i], d[i//2] + 1)
  elif i % 3 == 0:
    # 1을 뺐을 때의 연산과 3으로 나눴을 때의 연산 값 중 더 작은 값을 반환한다. 
    d[i] = min(d[i], d[i//3] + 1)
  elif i % 5 == 0:
    d[i] = min(d[i], d[i//5] + 1)

print(d[x])