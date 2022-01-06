def findPrefix(arr):
    for i in range(0, len(arr)):
        temp = arr[i]
        del arr[i]
        for j in range(0, len(arr)):
            if temp in arr[j][:len(phone_book[i])]:
                return False
        arr.insert(i, temp)
    return True

def solution(phone_book):
    answer = True
    answer = findPrefix(phone_book)
    print(answer)
    return answer

solution(["113", "44", "4544"])