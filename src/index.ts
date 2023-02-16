const canvas : HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement;
const context : CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;
const mousePosition : HTMLInputElement = document.getElementById("mouse-pos") as HTMLInputElement;
const route: HTMLTextAreaElement = document.getElementById("route") as HTMLTextAreaElement;
const nextButton: HTMLButtonElement = document.getElementById("next") as HTMLButtonElement;
const foundText: HTMLParagraphElement = document.getElementById("found") as HTMLParagraphElement;
const startDiv: HTMLDivElement = document.getElementById("start") as HTMLDivElement;
const endDiv: HTMLDivElement = document.getElementById("end") as HTMLDivElement;

for(const [label, vertice] of Object.entries(vertices)) {
    startDiv.innerHTML += `<button value="${label}">${label}</button>`
}

for(const [label, vertice] of Object.entries(vertices)) {
    endDiv.innerHTML += `<button value="${label}">${label}</button>`
}

startDiv.addEventListener("click", (e) => {
    const btn = e.target as HTMLButtonElement
    start = vertices[btn.value]
    console.log(start)
})
endDiv.addEventListener("click", (e) => {
    const btn = e.target as HTMLButtonElement
    end = vertices[btn.value];
})

canvas.addEventListener('mousemove', (e) => {
    mousePosition.value = `x: ${e.clientX}, y: ${e.clientY}`
})

nextButton.addEventListener("click", () => {
    if(!found) {
        loop(depthFirstSearch)
    }
})

const loop = (search: Function) => {
    search()
    draw()
    if(found) {
        foundText.hidden = false
    }
}

draw()


const breadthFirst = () => {
    //todo
}

const hillClimb = () => {
    //todo
} 

const beam = () => {
    //todo
}