function minTime(n: number, edges: number[][], hasApple: boolean[]): number {
  const adj = {};
  for (let i = 0; i < n; i++) adj[i] = [];
  for (let [n1, n2] of edges) {
    adj[n1].push(n2);
    adj[n2].push(n1);
  }

  function dfs(cur, parent): number {
    let time = 0;

    for (const child of adj[cur]) {
      if (child === parent) continue;
      const childTime = dfs(child, cur);
      if (childTime || hasApple[child]) {
        time += 2 + childTime;
      }
    }

    return time;
  }
  return dfs(0, -1);
}
