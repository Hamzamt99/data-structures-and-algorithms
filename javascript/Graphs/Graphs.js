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

}

const vertice1 = new verticesNode(1)
const vertice2 = new verticesNode(2)
const vertice3 = new verticesNode(3)

const graph = new Graphs()
const vertice4 = 5
graph.addVertices(vertice1)
graph.addVertices(vertice2)
graph.addVertices(vertice3)
graph.addEdge(vertice1, vertice3, 4)
console.log(graph.getNeighbors(vertice1));
// console.log(graph.List.entries());


module.exports = Graphs;