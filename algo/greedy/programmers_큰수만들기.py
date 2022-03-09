def solution(number, k):
    answer = [] # Stack
    
    # 스택 자료구조 활용
    for num in number:
      if not answer:
          answer.append(num)
          continue
      if k > 0:
          # 스택의 마지막 값과 비교하여 크거나 같은 수가 오면 전부 pop
          while answer[-1] < num:
              answer.pop()
              # 제거 할 때마다, k를 1씩 줄일 것
              k -= 1
              # 빈 리스트 혹은 k가 0일 경우, loop 탈출 => 다시 append
              if not answer or k <= 0:
                  break
      # k가 0보다 작거나 같으면 순서대로 스택에 값을 넣는다 
      answer.append(num)
	
    answer = answer[:-k] if k > 0 else answer
    return ''.join(answer)