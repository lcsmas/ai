const drawEdge = () => {
    for (let index = 0; index < edges.length; index++) {
        const edge = edges[index];
        context.lineWidth = 3;
        context.beginPath()
        context.moveTo(edge[0].x, edge[0].y)
        context.lineTo(edge[1].x, edge[1].y)
        context.stroke(); 
    }
    context.lineWidth = 1
}

const drawVertices = () => {
    for (const [label, vertice] of Object.entries(vertices)) {
        context.font = "25px arial";
        context.fillStyle = "black";
        context.fillText(label, vertice.x + 1, vertice.y - 4);
        context.beginPath();
        context.moveTo(vertice.x, vertice.y);
        context.arc(vertice.x, vertice.y, 3, 0, Math.PI * 2);
        context.fill();
    }
}

const drawCanvasBorder = () => {
    context.clearRect(0,0, canvas.width, canvas.height);
    context.strokeRect(0, 0, canvas.width, canvas.height);
}

const drawPath = () => {
    const path : Vertice[] = search.queue[0];
    for (let i = 0; i < path.length-1; i++) {
        const vertice = path[i];
        const nextVertice = path[i+1]
        context.beginPath()
        context.strokeStyle = "red"
        context.lineWidth = 3;
        context.moveTo(vertice.x, vertice.y)
        context.lineTo(nextVertice.x, nextVertice.y)
        context.stroke(); 
    }
}

const draw = () => {
    context.save()
    drawCanvasBorder()
    drawVertices()
    drawEdge()
    drawPath()
    context.restore()
}