type Plateau = string[];
let plateau: Plateau;

export function initialisePlateau(x: number, y: number) {
    plateau = new Array(x).fill(new Array(y).fill('_'));
    console.log(plateau);
}