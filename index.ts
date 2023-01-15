import * as readline from 'node:readline';
import * as util from 'node:util';
import { rovers, activeRover, initialiseRover, switchRover } from './src/rover';
import { plateau, initialisePlateau, updatePlateau, drawPlateau } from './src/plateau';
import { validatePlateauInput, validateRoverInput, validateInput, printHelp } from './src/command';

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export const question = util.promisify(reader.question).bind(reader);

async function initialiseInterface() {
    await plateauInput();

    await roverInput();

    updatePlateau(plateau, rovers);

    drawPlateau(plateau);

    userInput();
}

async function plateauInput() {
    const plateauAnswer = await question('Please enter plateau size in the format "X Y": ');
    const platSizeAns: string[] = validatePlateauInput(String(plateauAnswer).toUpperCase());
    if (platSizeAns.length !== 2) {
        console.log('Invalid Plateau Input!');
        await plateauInput();
    } else {
        initialisePlateau(parseInt(platSizeAns[0]), parseInt(platSizeAns[1]));
    }
}

async function roverInput() {
    const roverName = String(await question('Please enter a name for your rover: '));
    const roverAnswer = await question('Please enter rover initial co-ordinates in the format "X Y D": ');
    const roverAns: string[] = validateRoverInput(String(roverAnswer).toUpperCase(), plateau);
    if (roverAns.length !== 3) {
        console.log('Invalid Rover Input!');
        await roverInput();
    } else {
        if (plateau[parseInt(roverAns[0])][parseInt(roverAns[1])] === '_') {
            initialiseRover(roverName, parseInt(roverAns[0]), parseInt(roverAns[1]), roverAns[2]);
        } else {
            console.log('There is already another rover in that spot! You cannot deplay there!');
        }
    }
}

async function userInput() {
    let quit: boolean = false;
    console.log('For a list of commands type "?"');
    const inputString = await question('Please enter valid input: ');
    const inputArr = validateInput(String(inputString).toUpperCase());
    if (inputArr.length > 0) {
        // Remember location where rover is currently starting
        rovers[activeRover].setPrevious();
        // Await cannot be used in 'forEach'. Needed when dropping in another rover
        for (let x = 0; x < inputArr.length; x++) {
            switch (inputArr[x]) {
                case 'M':
                    rovers[activeRover].moveForward();
                    break;
                case 'L':
                    rovers[activeRover].turnLeft();
                    break;
                case 'R':
                    rovers[activeRover].turnRight();
                    break;
                case 'S':
                    await switchRover();
                    break;
                case 'D':                    
                    await roverInput();
                    break;
                case 'Q':
                    quit = true;
                    break;
                case '?':
                    printHelp();
                    break;
            }
        }
    }
    if (!quit) {
        if (inputArr[0] != '?') {
            updatePlateau(plateau, rovers);
            drawPlateau(plateau);
        }        
        userInput();
    } else {
        console.clear;
        rovers.forEach(rover => {
            console.log(`Rover ${rover.name} details:`);
            console.log(`Inital location: ${rover.initialX}, ${rover.initialY}. Final location: ${rover.currentX}, ${rover.currentY}, ${rover.currentDirection}`);
            console.log();
        })
    }
}

initialiseInterface();