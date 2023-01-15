/* ** FUTURE PLANS REMINDER **
- Additional functions for exploring. eg Drill, Camera, Jump
- Rover inventory for collecting samples
*/

import { question } from '..';
import { validateMovement } from './command';
import { plateau } from './plateau';

const directions = ['N', 'E', 'S', 'W'];
type Direction = typeof directions[number];

export type Rover = {
    name: string,
    symbol: string,
    initialX: number;
    previousX: number;
    currentX: number;
    initialY: number;
    previousY: number;
    currentY: number;
    currentDirection: Direction;
    moveForward: (this: Rover) => boolean;
    turnLeft: (this: Rover) => boolean;
    turnRight: (this: Rover) => boolean;
    setPrevious: (this:Rover) => boolean;
    getInfo: (this: Rover) => Rover;
}
export type Rovers = Rover[];
export let rovers: Rovers = [];

export let activeRover = 0;

export function initialiseRover(rname: string, x: number, y: number, dir: Direction) {
    rovers.push({
        name: rname,
        symbol: String(rovers.length),
        initialX: x,
        previousX: x,
        currentX: x,
        initialY: y,
        previousY: y,
        currentY: y,
        currentDirection: dir,
        moveForward: function (this: Rover) {
            if (validateMovement(plateau, this)) {
                switch (this.currentDirection) {
                    case 'N':
                        this.currentY++;
                        break;
                    case 'E':
                        this.currentX++;
                        break;
                    case 'S':
                        this.currentY--;
                        break;
                    case 'W':
                        this.currentX--;
                        break;
                }
                return true;   
            } else {
                return false;
            }
        },
        turnLeft: function (this: Rover) {
            if (this.currentDirection === directions[0]) {
                this.currentDirection = directions[3];
            } else {
                this.currentDirection = directions[directions.findIndex(dir => dir === this.currentDirection) - 1];
            }
            return true;
        },
        turnRight: function (this: Rover) {
            if (this.currentDirection === directions[3]) {
                this.currentDirection = directions[0];
            } else {
                this.currentDirection = directions[directions.findIndex(dir => dir === this.currentDirection) + 1];
            }
            return true;
        },
        setPrevious: function (this:Rover) {
            this.previousX = this.currentX;
            this.previousY = this.currentY;
            return true;
        },
        getInfo: function (this: Rover) {
            return this;
        }
    });    
    return rovers[rovers.length - 1];
}

export async function switchRover() {
    let validRovers: string[] = [];
    console.clear;
    console.log();
    console.log('Please select a rover to switch to:')
    rovers.forEach(rover => {
        console.log(` ${rover.symbol}:  Name: ${rover.name}. Current location: ${rover.currentX}, ${rover.currentY}. Facing: ${rover.currentDirection}.`)
        validRovers.push(rover.symbol);
    })
    const newActive = await question('Please enter number of selected rover:');
    
    if (validRovers.includes(String(newActive))) {
        activeRover = parseInt(String(newActive));
    } else {
        console.log('Selection invalid. Active rover remains unchanged!');
    }
}