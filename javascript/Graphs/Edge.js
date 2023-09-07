'use strict'

class Edge {
    constructor(vertices, weight = 0) {
        this.vertices = vertices
        this.weight = weight;
    }
}

module.exports = Edge;