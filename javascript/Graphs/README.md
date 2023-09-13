# Graphs Implementation

## Pull Request: https://github.com/Hamzamt99/data-structures-and-algorithms/pull/30

## whiteBoard:
![whiteboard](./assets/whiteboard.jpg)

## Unit Test : 
![UnitTest](./assets/graphs.png)


## whiteBoard2
![whiteboard](./assets/whiteboard2.jpg)

## Big O:
### Time Complexity: O(1) 

### Space Complexity: O(n) 

### Approach
Initialize a map to store vertices and their adjacency lists.
Add vertices to the graph and create edges between them.
Retrieve information about the graph, including its vertices and their neighbors.


#### Approach for breadthFirst method
the method breadth-first search (BFS) traversal starting from a given node in a graph. It uses a queue to visit nodes level by level, ensuring that all neighbors of a node are visited before their neighbors. The visited nodes are stored in the result array, and the function returns this array when the traversal is complete.

### Code
```javascript
'use strict'

const verticesNode = require('./Vertices')
const Edge = require('./Edge')
class Graphs {
    constructor() {
        this.List = new Map();
    }

    addVertices(vertices) {
        this.List.set(vertices, [])
        return
    }
    addEdge(start, end, weight) {
        if (!this.List.has(start) && !this.List.has(end)) {
            console.log('cant add edge to none or one vertices only')
            return;
        }
        const startVertex = this.List.get(start);
        const edge = new Edge(end, weight);
        startVertex.push(edge);
    }
    getAllVertices() {
        return Array.from(this.List.keys());
    }

    getNeighbors(vertex) {
        if (!this.List.has(vertex)) {
            console.log('Vertex not found');
            return [];
        }

        const neighbors = this.List.get(vertex).map((edge) => edge);

        return neighbors;
    }

    size() {
        return this.List.size
    }
    
    breadthFirst(startNode) {
        if (!this.List.has(startNode)) {
            console.log('Start node not found');
            return [];
        }

        const visited = new Set();
        const queue = [startNode];
        const result = [];

        while (queue.length > 0) {
            const currentVertex = queue.shift();

            if (!visited.has(currentVertex)) {
                visited.add(currentVertex);
                result.push(currentVertex);

                const neighbors = this.getNeighbors(currentVertex);

                for (const neighbor of neighbors) {
                    if (!visited.has(neighbor.node)) {
                        queue.push(neighbor.node);
                    }
                }
            }
        }

        return result;
    }

}
