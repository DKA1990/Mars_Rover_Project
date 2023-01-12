const directions = ['N', 'S', 'E', 'W'];
type Direction = typeof directions[number];

type Rover = {
    name: string,
    initialX: number;
    currentX: number;
    initialY: number;
    currentY: number;
    currentDirection: Direction;
}
type Rovers = Rover[];
let rovers: Rovers = [];

export function initialiseRover(rname: string, x: number, y: number, dir: Direction) {
    rovers.push({
        name: rname,
        initialX: x,
        currentX: x,
        initialY: y,
        currentY: y,
        currentDirection: dir
    });
    console.log(rovers);
}

export function getRoverInfo() {

}