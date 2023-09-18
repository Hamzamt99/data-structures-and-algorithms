# Graphs Implementation

## Pull Request:

## whiteBoard3
![whiteboard](./assets/whiteboard3.jpg)

## whiteBoard:
![whiteboard](./assets/whiteboard.jpg)

## Unit Test : 
![UnitTest](./assets/graphs.png)


## whiteBoard2
![whiteboard](./assets/whiteboard2.jpg)



## Big O:
### Time Complexity: O(n) 

### Space Complexity: O(1) 

### Approach
Initialize a map to store vertices and their adjacency lists.
Add vertices to the graph and create edges between them.
Retrieve information about the graph, including its vertices and their neighbors.


#### Approach for breadthFirst method
the method breadth-first search (BFS) traversal starting from a given node in a graph. It uses a queue to visit nodes level by level, ensuring that all neighbors of a node are visited before their neighbors. The visited nodes are stored in the result array, and the function returns this array when the traversal is complete.

#### Approach for trip function
The businessTrip function takes a graph and an array of cities, iterates through the cities, and calculates the total cost of the trip by summing the weights of edges between consecutive cities in the graph. It returns the cost if the trip is valid; otherwise, it returns null if the input is invalid or there's no direct connection between cities.

### Code
```javascript
'use strict'


function businessTrip(graph, cities) {
    if (!Array.isArray(cities) || cities.length < 2) {
        return null;
    }

    let totalCost = 0;

    for (let i = 0; i < cities.length - 1; i++) {
        const startCity = cities[i];
        const endCity = cities[i + 1];

        if (!graph.List.has(startCity) || !graph.List.has(endCity)) {
            return null;
        }

        const neighbors = graph.getNeighbors(startCity);
        let found = false;

        for (const neighbor of neighbors) {
            if (neighbor.node === endCity) {
                totalCost += neighbor.weight;
                found = true;
                break;
            }
        }

        if (!found) {
            return null;
        }
    }

    return totalCost;
}