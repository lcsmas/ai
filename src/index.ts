const canvas : HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement;
const context : CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;
const mousePosition : HTMLInputElement = document.getElementById("mouse-pos") as HTMLInputElement;
const route: HTMLTextAreaElement = document.getElementById("route") as HTMLTextAreaElement;
const nextButton: HTMLButtonElement = document.getElementById("next") as HTMLButtonElement;
const foundText: HTMLParagraphElement = document.getElementById("found") as HTMLParagraphElement;
const startDiv: HTMLDivElement = document.getElementById("start") as HTMLDivElement;
const endDiv: HTMLDivElement = document.getElementById("end") as HTMLDivElement;

let depthFirstSearch : GraphSearch;  

(function init(){
    for(const [label, vertice] of Object.entries(vertices)) {
        startDiv.innerHTML += `<button value="${label}">${label}</button>`
    }
    
    for(const [label, vertice] of Object.entries(vertices)) {
        endDiv.innerHTML += `<button value="${label}">${label}</button>`
    }

    route.value = ""
    depthFirstSearch = new DepthFirstSearch();
    draw()
})()

const loop = (search: GraphSearch) => {
    search.next()
    draw()
    route.value = search.queue[0].map(vertice => vertice.label).join(" -> ")
    if(search.found) {
        foundText.hidden = false
    } else {
        foundText.hidden = true
    }
}


nextButton.addEventListener("click", () => {
    loop(depthFirstSearch)
})

canvas.addEventListener('mousemove', (e) => {
    mousePosition.value = `x: ${e.clientX}, y: ${e.clientY}`
})

startDiv.addEventListener("click", (e) => {
    const btn = e.target as HTMLButtonElement
    depthFirstSearch = new DepthFirstSearch(vertices[btn.value], depthFirstSearch.end)
})

endDiv.addEventListener("click", (e) => {
    const btn = e.target as HTMLButtonElement
    depthFirstSearch = new DepthFirstSearch(depthFirstSearch.start, vertices[btn.value])
})