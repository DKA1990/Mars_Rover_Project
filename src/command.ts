import { Rover } from './rover';
import { Plateau } from './plateau';

export function validatePlateauInput(input: string): string[] {
    const inputArr = input.trim().split(' ');
    if (inputArr.length === 2 && inputArr.filter(value => /^\d+$/.test(value)).length !== 0) {
        return inputArr;
    } else {
        return [];
    }
}

export function validateRoverInput(input: string, inputPlateau: Plateau): string[] {
    const reg = /^\d+$/;
    const inputArr = input.trim().split(' ');
    if (inputArr.length === 3 && reg.test(inputArr[0]) && reg.test(inputArr[1]) && ['N', 'E', 'S', 'W'].includes(inputArr[2])) {
        if (parseInt(inputArr[0]) < inputPlateau[0].length && parseInt(inputArr[1]) < inputPlateau.length) {
            return inputArr;
        }
    }
    return [];
}

export function validateInput(input: string): string[] {
    const regex = /^[?MLR]*$/;
// Movement can only contain 'MLR'. Other inputs should be single characters
    if (regex.test(input.trim()) || input === 'S' || input === 'D' || input === '?' || input === 'Q') {
        return [...input.trim()];
    } else {
        return [];
    }
}

export function validateMovement(inputPlateau: Plateau, inputRover: Rover): boolean {
// Check empty space in direction of movement and movement remains within plateau
// Failure for now cancels movement - Expand in future for explosions!
    const x = inputRover.currentX;
    const y = inputRover.currentY;
    let returnVal: boolean = false;
    switch (inputRover.currentDirection) {
        case 'N':
            if (y < inputPlateau[0].length - 1) {
                if (inputPlateau[x][y + 1] === '_') {
                    returnVal = true;
                }
            }
            break;
        case 'E':
            if (x < inputPlateau.length - 1) {
                if (inputPlateau[x + 1][y] === '_') {
                    returnVal = true;
                }
            }
            break;
        case 'S':
            if (y > 0) {
                if (inputPlateau[x][y - 1] === '_') {
                    returnVal = true;
                }
            }
            break;
        case 'W':
            if (x > 0) {
                if (inputPlateau[x - 1][y] === '_') {
                    returnVal = true;
                }
            }
            break;
    }
    return returnVal;
}

export function printHelp() {
    console.clear;
    console.log();
    console.log('Valid characters for movement are "M", "R" and "L". Used to move forward, turn right and left respectively.');
    console.log('Movement input can be over any length with these valid characters.')
    console.log('"D" allows another rover to be dropped in the plateau.')
    console.log('"S" allows switching between active rovers.')
    console.log('"Q" ends the program and displays the final positions of all rovers.')
    console.log();
}