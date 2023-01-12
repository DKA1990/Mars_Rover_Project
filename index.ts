import * as readline from 'node:readline';
import * as util from 'node:util';
import { initialiseRover, getRoverInfo } from './src/rover';
import { initialisePlateau } from './src/plateau';

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = util.promisify(reader.question).bind(reader);

async function initialiseInterface() {
    /*reader.question('Please enter plateau size in the format "X Y": ', (answer): void => {
        const platSizeAns: string[] = answer.split(" ");
        initialisePlateau(parseInt(platSizeAns[0]), parseInt(platSizeAns[1]));
        console.log(plateau);
    });*/
    const plateauAnswer = await question('Please enter plateau size in the format "X Y": ');
    const platSizeAns: string[] = String(plateauAnswer).split(" ");
    initialisePlateau(parseInt(platSizeAns[0]), parseInt(platSizeAns[1]));

    /*reader.question('Please enter rover initial co-ordinates in the format "X Y D": ', (answer) => {
        const roverAns: string[] = answer.split(" ");
        initialiseRover(parseInt(roverAns[0]), parseInt(roverAns[1]), roverAns[2]);
    });*/
    const roverName = String(await question('Please enter a name for your rover: '));
    const roverAnswer = await question('Please enter rover initial co-ordinates in the format "X Y D": ');
    const roverAns: string[] = String(roverAnswer).split(" ");
    initialiseRover(roverName, parseInt(roverAns[0]), parseInt(roverAns[1]), roverAns[2]);


}


initialiseInterface();