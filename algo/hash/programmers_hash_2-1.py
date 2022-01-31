def findPrefix(arr):
    sortedArr = sorted(arr, key=len)
    for i in range(0, len(sortedArr)-1):
        if sortedArr[i] in sortedArr[i+1][:len(sortedArr[i])]:
                return False
    return True

def solution(phone_book):
    answer = True
    answer = findPrefix(phone_book)
    print(answer)
    return answer