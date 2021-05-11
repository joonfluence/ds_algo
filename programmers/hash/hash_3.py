def solution(clothes):
    answer = {}
    for i in clothes:
        # i[1]는 의상의 종류를 가리킴. 
        # 즉, 답안에 의상의 종류가 있으면 +1을 해주고
        if i[1] in answer: answer[i[1]] += 1
        # 값이 없으면, 1을 넣어준다. 
        else: answer[i[1]] = 1

    cnt = 1
    for i in answer.values():
        cnt *= (i+1)
    return cnt - 1

print(solution([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]))