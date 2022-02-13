from collections import deque

def isClose(word, compare_word):
    diff = 0
    for i in range(len(word)):
        if word[i] != compare_word[i]:
            diff += 1
    if diff == 1:
        return True
    return False  

def bfs(begin, target, words, visited):
  queue = deque()
  queue.append([begin, 0])

  while queue:
    v, cnt = queue.popleft()
    print(v, cnt)
    if v == target:
        return cnt
    for i in words:
      if not visited[i] and isClose(v, i):
          queue.append([i, cnt+1])
          visited[i] = True

def solution(begin, target, words):
  answer = 0
  visited = {}
  if not target in words:
    return answer
  for i in words:
    visited[i] = False
  answer = bfs(begin, target, words, visited)
  return answer

solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])