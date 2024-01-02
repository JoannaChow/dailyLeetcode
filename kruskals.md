## Kruskal’s Minimum Spanning Tree (MST)

- greedy algo

- a MST is a weighted, connected, undirected graph that has a weight <= the weight of every other spanning tree.

### steps:
1. sort all edges in non-decreading order of weight.
2. select the smallest weighted edge, **if the edge doesn't form a cycle**.
3. repeat the last step until all vertices are in the spaning tree.