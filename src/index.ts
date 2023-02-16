const canvas : HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement;
const context : CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;
const mousePosition : HTMLInputElement = document.getElementById("mouse-pos") as HTMLInputElement;
const route: HTMLTextAreaElement = document.getElementById("route") as HTMLTextAreaElement;
const nextButton: HTMLButtonElement = document.getElementById("next") as HTMLButtonElement;

canvas.addEventListener('mousemove', (e) => {
    mousePosition.value = `x: ${e.clientX}, y: ${e.clientY}`
})

interface Vertice { x: number, y: number, label: string }
interface Vertices { [key: string] : Vertice }
type Edge = Vertice[]

const vertices: Vertices = { 
    s: { x : 20, y: 20, label: 's' },    
    a: { x: 138, y: 122, label: 'a'},    
    b: { x: 180, y: 267, label: 'b'},    
    c: { x: 300, y: 300, label: 'c'},    
    d: { x: 300, y: 60, label: 'd'},    
    e: { x: 400, y: 150, label: 'e' },    
    f: { x: 78, y: 383, label: 'f' },
    g: { x: 350, y: 450, label: 'g' },
    h: { x: 460, y: 290, label: 'h' },
    i: { x: 30, y: 260, label: 'i'}
}    

const edges = [
    [vertices.s, vertices.a],
    [vertices.a, vertices.b],
    [vertices.a, vertices.c],
    [vertices.a, vertices.d],
    [vertices.a, vertices.e],
    [vertices.d, vertices.e],
    [vertices.s, vertices.d],
    [vertices.b, vertices.f],
    [vertices.f, vertices.c],
    [vertices.c, vertices.h],
    [vertices.f, vertices.g],
    [vertices.s, vertices.i],
    [vertices.i, vertices.f],
    [vertices.i, vertices.b]
]    

const drawEdge = () => {
    for (let index = 0; index < edges.length; index++) {
        const edge = edges[index];
        context.lineWidth = 3;
        context.beginPath()
        context.moveTo(edge[0].x, edge[0].y)
        context.lineTo(edge[1].x, edge[1].y)
        context.stroke(); 
    }
}

function drawVertices() {
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

const colorEdge = (edge: Edge) => {
    context.beginPath()
    context.strokeStyle = "red"
    context.lineWidth = 3;
    context.moveTo(edge[0].x, edge[0].y)
    context.lineTo(edge[1].x, edge[1].y)
    context.stroke(); 
}

const uncolorEdge = (edge: Edge) => {
    context.beginPath()
    context.strokeStyle = "black";
    context.lineWidth = 3;
    context.moveTo(edge[0].x, edge[0].y)
    context.lineTo(edge[1].x, edge[1].y)
    context.stroke();  
}

const depthFirst = (start: Vertice, end: Vertice) => {
    let step = 0;
    const edgeQueue : Edge[] = [];
    const edgeDone : Edge[] = [];
    let nextVertice = start    
    let nextEdge: Vertice[] = [];
    route.value = nextVertice.label;

    const browseGraph = () => {
        let nextEdges = edges.filter(edge => {
            return edge.includes(nextVertice) && !edgeDone.includes(edge)
        });
        if(nextEdges.length == 0) {
            nextVertice = edgeDone[step-1].find(vertice => vertice != nextVertice) as Vertice;
            uncolorEdge(edgeDone[step-1])
            step -= 1;
        } else {
            step += 1;
            edgeQueue.unshift(...nextEdges)
            nextEdge = edgeQueue.shift() as Vertice[];
            edgeDone.push(nextEdge)
            colorEdge(nextEdge);
            nextVertice = nextEdge.find(vertice => vertice != nextVertice) as Vertice
            route.value += ` -> ${nextVertice.label}`
            if(nextVertice == end) {
                context.font = "50px arial"
                context.fillStyle = "green"
                context.textAlign = "center"
                context.fillText("FOUND", canvas.height / 2, canvas.width / 2)
                nextButton.removeEventListener("click", browseGraph);
            }
        }
    }

    nextButton.addEventListener("click", browseGraph)
}

const draw = () => {
    context.clearRect(0,0, canvas.width, canvas.height);
    context.strokeRect(0, 0, canvas.width, canvas.height);
    context.save();

    drawVertices();
    drawEdge();
    depthFirst(vertices.s, vertices.g);
    
    context.restore(); 
}
draw()
// window.requestAnimationFrame(draw)


const breadthFirst = () => {
    //todo
}

const hillClimb = () => {
    //todo
} 

const beam = () => {
    //todo
}