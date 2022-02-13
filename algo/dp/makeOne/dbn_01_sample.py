def make_one(num):
  count = 0
  while True:
    count = count + 1
    if num == 1:
      break
    if num % 5 == 0:
      num = num / 5
    elif ( num - 1 ) % 5 == 0:
      num = (num - 1 ) / 5
    elif num % 3 == 0:
      num = num / 3
    elif num % 2 == 0:
      num = num / 2
    print(count, num)
  return count

print(make_one(26))

