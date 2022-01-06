def dynamic_array(n, queries):
  result = []
  arr = [[]]*n
  answer = 0

  print(arr)

  for query in queries:
    idx = (query[1] ^ answer) % n
    if query[0] == 1:
      arr[idx].append(query[2])
    else:
      answer = arr[idx][query[2] % len(arr[idx])]
      result.append(answer)
  return result

result = dynamic_array(2, [
  [1, 0, 5],
  [1, 1, 7],
  [1, 0, 3],
  [2, 1, 0],
  [2, 1, 1],
])

print(result)