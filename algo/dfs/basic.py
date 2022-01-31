# -*- coding: utf-8 -*-
def dfs(graph, v, visited):
  visited[v] = True
  print(v, visited)

  # 종료조건 : 전부 방문했을 때 종료한다.

  # 해당 정점과 인접한 노드들을 순서대로 순회해줍니다
  for item in graph[v]:
    # 방문하지 않은 정점의 인접노드만 탐색합니다. 
    if not visited[item]:
      dfs(graph, item, visited)
  # Q. V에 들어갈 정점에는 어떻게 갈 수 있을까?
  # 반복조건 : 아직 방문하지 않은 노드가 남아있으면, 계속 순회한다. 
  # dfs(graph, 2, visited)
  # dfs(graph, 7, visited)
  # dfs(graph, 6, visited)
  # dfs(graph, 8, visited)
  # dfs(graph, 3, visited)
  # dfs(graph, 4, visited)
  # dfs(graph, 5, visited)


# 각 노드가 연결된 정보를 리스트 자료형으로 표현(2차원 리스트)
graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7]
]

# 각 노드가 방문된 정보를 리스트 자료형으로 표현(1차원 리스트)
visited = [False] * 9

# 정의된 DFS 함수 호출
dfs(graph, 1, visited)
