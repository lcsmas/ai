let found = false;
const queue : Vertice[][] = [];
const done : Vertice[] = []
let start = vertices.s;
let end = vertices.g;
queue.unshift([start])

const findNextVertice = (edge : Edge, currentVertice: Vertice) => {
    return edge.find(vertice => vertice != currentVertice) as Vertice
}

const init = () => {
}

const depthFirstSearch = () => {
    const currentPath = queue.shift() as Vertice[]
    const currentVertice = currentPath[currentPath.length-1]
    done.push(currentVertice)
    for (let i = 0; i < edges.length; i++) {
        const edge = edges[i];
        if(edge.includes(currentVertice)) {
            const nextVertice = findNextVertice(edge, currentVertice)
            if(nextVertice == end) found = true;
            if(!done.includes(nextVertice)) {
                queue.unshift([...currentPath, nextVertice])
            }
        }
    }
}