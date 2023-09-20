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

    breadthFirst(node) {
        if (!this.List.has(node)) {
            console.log('Start node not found');
            return [];
        }

        const visited = new Set();
        const queue = [node];
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

    depthFirst(node) {
        if (!this.List.has(node)) {
            console.log('Start node not found');
            return [];
        }

        const visited = new Set();
        const result = [];

        const dfs = (currentNode) => {
            visited.add(currentNode);
            result.push(currentNode);

            const neighbors = this.getNeighbors(currentNode);

            for (const neighbor of neighbors) {
                if (!visited.has(neighbor.node)) {
                    dfs(neighbor.node);
                }
            }
        };

        dfs(node);

        return result;
    }

}

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
const graph = new Graphs()
const vertice1 = new verticesNode(1)
const vertice2 = new verticesNode(2)
const vertice3 = new verticesNode(3)

const tripCost = businessTrip(graph, [vertice1, vertice3]);
if (tripCost !== null) {
    console.log(`trip cost ${tripCost}`);
} else {
    console.log('trip not possible.');
}



const vertice4 = 5
graph.addVertices(vertice1)
graph.addVertices(vertice2)
graph.addVertices(vertice3)
graph.addEdge(vertice1, vertice3, 4)
// console.log(graph.getNeighbors(vertice1));
// console.log(graph.List.entries());


module.exports = Graphs;