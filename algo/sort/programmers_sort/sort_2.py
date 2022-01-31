def solution(num):
  num = list(map(str, num))
  num.sort(key = lambda x : x*3, reverse = True)
  return str(int(''.join(num)))

print(solution([6, 10, 2]))