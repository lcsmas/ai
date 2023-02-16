const canvas : HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement;
const context : CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;
const mousePosition : HTMLInputElement = document.getElementById("mouse-pos") as HTMLInputElement;
const route: HTMLTextAreaElement = document.getElementById("route") as HTMLTextAreaElement;
const nextButton: HTMLButtonElement = document.getElementById("next") as HTMLButtonElement;
const foundText: HTMLParagraphElement = document.getElementById("found") as HTMLParagraphElement;
const startDiv: HTMLDivElement = document.getElementById("start") as HTMLDivElement;
const endDiv: HTMLDivElement = document.getElementById("end") as HTMLDivElement;

let selectedStart : HTMLButtonElement;
let selectedEnd : HTMLButtonElement;
let search : GraphSearch;  

(function init(){
    const defaultStart = vertices.s
    const defaultEnd = vertices.e
    for(const [label, vertice] of Object.entries(vertices)) {
        const btn = document.createElement("button");
        btn.value = label
        btn.innerText = label
        if(label == defaultStart.label) {
            btn.style.background = "green"
            selectedStart = btn;
        }
        startDiv.appendChild(btn)
    }
    
    for(const [label, vertice] of Object.entries(vertices)) {
        const btn = document.createElement("button");
        btn.value = label
        btn.innerText = label
        if(label == defaultEnd.label) {
            btn.style.background = "green"
            selectedEnd = btn;
        }
        endDiv.appendChild(btn)
    }

    route.value = ""
    search = new DepthFirstSearch(defaultStart, defaultEnd);
    draw()
})()

const loop = (search: GraphSearch) => {
    if(!search.found) {
        foundText.hidden = true
        search.next()
        draw()
        route.value = search.queue[0].map(vertice => vertice.label).join(" -> ")
    }
    if(search.found) {  
        foundText.hidden = false;
    }
}

nextButton.addEventListener("click", () => {
    if(search.found) {
        search = new DepthFirstSearch(search.start, search.end)
    }
    loop(search)
})

canvas.addEventListener('mousemove', (e) => {
    mousePosition.value = `x: ${e.clientX}, y: ${e.clientY}`
})

startDiv.addEventListener("click", (e) => {
    selectedStart? selectedStart.style.backgroundColor = "" : ""
    const btn = e.target as HTMLButtonElement
    selectedStart = btn
    selectedStart.style.backgroundColor = "green"
    search = new DepthFirstSearch(vertices[btn.value], search.end)
})

endDiv.addEventListener("click", (e) => {
    selectedEnd? selectedEnd.style.backgroundColor = "" : ""
    const btn = e.target as HTMLButtonElement
    selectedEnd = btn
    selectedEnd.style.backgroundColor = "green"
    search = new DepthFirstSearch(search.start, vertices[btn.value])
})