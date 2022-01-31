def solution(phone_book):
    answer = True
    phone_book.sort()
    for number in phone_book:
        for number_two in phone_book:
            if number == number_two[0:len(number)]:
                answer = False
                return answer
            print(number, number_two)
    return answer