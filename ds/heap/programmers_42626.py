from collections import deque

def solution(scoville, K):
    answer = 0
    queue = sorted(deque(scoville))
    
    while queue[0] < K:
      queue = deque(sorted(queue))
      try:
        queue.appendleft(queue.popleft() + queue.popleft() * 2)
      except IndexError:
        return -1
      answer += 1
    return answer

print(solution([1, 1, 100], 7))