/* Empty squares in the plateau are donated by '_'.
Rovers are displayed using their symbol property. Currently this refers
to the rovers key and cannot be changed.
** FUTURE PLANS REMINDER **
- Additional obstacles within plateau. Impassible rocks, aliens, etc.
- Option to disable safety and allow collisions between other rovers and objects.
- Additional plateau sizes / shapes. Random and mazes?
- More interactible objects in plateau. Eg rocks to mine, etc.
- Improve UI / replace command prompt display.
*/

import { Rovers } from './rover';

type PlateauRow = string[]
export type Plateau = PlateauRow[];
export let plateau: Plateau;

export function initialisePlateau(x: number, y: number) {
    plateau = new Array(x).fill('_').map(() => {
        return Array(y).fill('_');
    });
    return plateau;
}

export function updatePlateau(inputPlateau: Plateau, inputRovers: Rovers) {
    inputRovers.forEach(rover => {
        inputPlateau[rover.previousX][rover.previousY] = '_';
        inputPlateau[rover.currentX][rover.currentY] = rover.symbol;
    });
}

export function drawPlateau(inputPlateau: Plateau) {
    console.clear;

    for (let y = inputPlateau[0].length - 1; y >= 0; y--) {    
        let printStr: string = ' ';
        for (let x = 0; x < inputPlateau.length; x++) {
            printStr = printStr + inputPlateau[x][y] + ' ';
        }
        console.log(printStr);
    }
    
    console.log();
}