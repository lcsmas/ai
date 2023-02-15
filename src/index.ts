const canvas : HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement;
const context : CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;
const mousePosition : HTMLInputElement = document.getElementById("mouse-pos") as HTMLInputElement;

canvas.addEventListener('mousemove', (e) => {
    mousePosition.value = `x: ${e.clientX}, y: ${e.clientY}`
})

interface Vertice { x: number, y: number }
interface Vertices { [key: string] : Vertice }

const vertices: Vertices = { 
    s: { x : 20, y: 20 },    
    a: { x: 138, y: 122 },    
    b: { x: 180, y: 267 },    
    c: { x: 300, y: 300 },    
    d: { x: 300, y: 60 },    
    e: { x: 400, y: 150 },    
    f: { x: 78, y: 383 },
    g: { x: 350, y: 450 },
    h: { x: 460, y: 290 },
    i: { x: 30, y: 260}
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


const draw = () => {
    context.clearRect(0,0, canvas.width, canvas.height);
    context.strokeRect(0, 0, canvas.width, canvas.height);
    context.save();

    for (const [key, value] of Object.entries(vertices)) {
        context.font = "25px serif";
        context.fillStyle = "black";
        context.fillText(key, value.x +1 , value.y - 4 );
        context.beginPath();
        context.moveTo(value.x, value.y);
        context.arc(value.x, value.y, 3, 0, Math.PI * 2)
        context.fill()
   }

    for (let index = 0; index < edges.length; index++) {
        const edge = edges[index];
        context.beginPath()
        context.moveTo(edge[0].x, edge[0].y)
        context.lineTo(edge[1].x, edge[1].y)
        context.stroke(); 
    }
    
    context.restore(); 
}

draw()
// window.requestAnimationFrame(draw)

// const depthFirst = (start: Vertice, end: Vertice) => {
//    const queue = [];
//    const startEdges = edges.filter(edge => edge.includes(start));
   
//    queue.push(...startEdges)
//    let nextEdge = queue.pop();
//    let nextVertice = nextEdge?.find(edge => edge != start)
//    while(nextVertice && nextVertice != end) {
    
//    }
//    console.log(queue)
// //    queue.push(...startEdges)
// }
// depthFirst(vertices.s, vertices.h)

const breadthFirst = () => {
    //todo
}

const hillClimb = () => {
    //todo
} 

const beam = () => {
    //todo
}