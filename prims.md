## [Prim’s Algorithm for Minimum Spanning Tree(MST)](https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/) [Graph #1584]

- Greedy algorithm

- This algorithm always starts with a single node and moves through several adjacent nodes, in order to explore all of the connected edges along the way.
```

    n1  --> n2  --> n4
        \       \
         --> n3  --> n5
```
- The algorithm starts with an empty spanning tree, and a set of vertices.
- At every step, find the edge that has the minium weight between 2 sets of vertices.
- move the other enpoint from the set of vertices to the MST