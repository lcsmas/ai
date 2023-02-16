class DepthFirstSearch implements GraphSearch {
    start: Vertice
    end: Vertice
    found = false;
    queue : Vertice[][] = [];
    done : Vertice[] = []

    constructor(start = vertices.s, end = vertices.g) {
       this.start = start;
       this.end = end; 
       this.queue.unshift([start])
    }

    next() {
        const currentPath = this.queue.shift() as Vertice[]
        const currentVertice = currentPath[currentPath.length-1]
        this.done.push(currentVertice)
        for (let i = 0; i < edges.length; i++) {
            const edge = edges[i];
            if(edge.includes(currentVertice)) {
                const nextVertice = this.findNextVertice(edge, currentVertice)
                if(nextVertice == this.end) {
                    this.found = true
                };
                if(!this.done.includes(nextVertice)) {
                    this.queue.unshift([...currentPath, nextVertice])
                }
            }
        }
    }

    findNextVertice(edge : Edge, currentVertice: Vertice) {
        return edge.find(vertice => vertice != currentVertice) as Vertice
    }
}

