def dfs(graph, v, visited):
  visited[v] = True
  print(v, visited)

  # 종료조건 : 전부 방문했을 때 종료한다.

  # 해당 정점과 인접한 노드들을 순서대로 순회해줍니다
  for item in graph[v]:
    # 방문하지 않은 정점의 인접노드만 탐색합니다. 
    if not visited[item]:
      dfs(graph, item, visited)

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
