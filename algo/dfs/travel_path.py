from collections import defaultdict

def make_graph(ticket_list):
	routes = defaultdict(list)
	for key, value in ticket_list:
		routes[key].append(value)
	return routes

def dfs(graph):
    stack = ["ICN"] # 출발지 고정 (ICN)
    path = []
    while stack: # 더 이상 탐색할 정점이 없을 때까지
      top = stack[-1] 
      # 인접한 정점이 있는 경우, 스택에 삽입
      if top in graph and len(graph[top]) != 0: 
        stack.append(graph[top].pop(0))
        # 없거나 티켓을 전부 사용한 경우, path에 기록
      else:
        path.append(stack.pop())
    return path[::-1]

def solution(tickets):
	answer = []
	routes = make_graph(tickets)
	for r in routes:
		routes[r].sort()
	answer = dfs(routes)
	return answer

solution([["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]])