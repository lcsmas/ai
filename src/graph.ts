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