const Graphs = require('./Graphs')

describe('Graphs', () => {
    let graph;

    beforeEach(() => {
        graph = new Graphs();
    });

    it('should add vertices successfully', () => {
        graph.addVertices('A');
        graph.addVertices('B');
        const vertices = graph.getAllVertices();
        expect(vertices).toEqual(['A', 'B']);
    });

    it('should add an edge successfully', () => {
        graph.addVertices('A');
        graph.addVertices('B');
        graph.addEdge('A', 'B', 10);
        const neighbors = graph.getNeighbors('A');
        expect(neighbors).toEqual([{ vertices: 'B', weight: 10 }]);
    });

    it('should retrieve all vertices', () => {
        graph.addVertices('A');
        graph.addVertices('B');
        const vertices = graph.getAllVertices();
        expect(vertices).toEqual(['A', 'B']);
    });

    it('should retrieve appropriate neighbors with weights', () => {
        graph.addVertices('A');
        graph.addVertices('B');
        graph.addEdge('A', 'B', 10);
        const neighbors = graph.getNeighbors('A');
        expect(neighbors).toEqual([{ vertices: 'B', weight: 10 }]);
    });

    it('should return the proper size of the graph', () => {
        graph.addVertices('A');
        graph.addVertices('B');
        const size = graph.size();
        expect(size).toBe(2);
    });

    it('should handle a graph with only one vertices and edge', () => {
        graph.addVertices('A');
        graph.addEdge('A', 'A', 5);
        const vertices = graph.getAllVertices();
        const neighbors = graph.getNeighbors('A');
        expect(vertices).toEqual(['A']);
        expect(neighbors).toEqual([{ vertices: 'A', weight: 5 }]);
        const size = graph.size();
        expect(size).toBe(1);
    });
});
