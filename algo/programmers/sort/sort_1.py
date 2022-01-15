def solution(array, commands):
    answer = []
    for command in commands:
      one = command[0] - 1
      two = command[1]
      three = command[2] - 1
      sortedArr = sorted(array[one:two])
      answer.append(sortedArr[three])
    return answer

solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])
