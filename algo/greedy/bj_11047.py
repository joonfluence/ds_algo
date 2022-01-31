def greedy(coin_num, money):
  array = [1, 5, 10, 50, 100, 500, 1000, 5000, 10000, 50000]
  array[:coin_num].reverse()
  count = 0
  print(array)

  for coin in array:
    count += money//coin
    money %= coin
    print(count, money)
  return count

print(greedy(10, 4200))