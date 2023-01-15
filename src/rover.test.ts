import {
    Rover,
    initialiseRover
} from "./rover";

import { Plateau } from './plateau';

const testPlateau: Plateau = [
    ['_', '_', '_', '_', '_'],
    ['_', '_', '_', '_', '_'],
    ['_', '_', '1', '_', '_'],
    ['_', '_', '_', '_', '_'],
    ['_', '_', '_', '_', '_'],];

const testRover: Rover = initialiseRover('Henry', 3, 2, 'S');
const testRover2: Rover = initialiseRover('Jimmy', 2, 1, 'N');
const testRover3: Rover = initialiseRover('Boris', 3, 3, 'N');

describe("initialiseRover", () => {
    test("Creates a rover object", () => {
        expect(initialiseRover("Odessey", 1, 1, "N")).toEqual({
            name: 'Odessey',
            symbol: '3',
            initialX: 1,
            previousX: 1,
            currentX: 1,
            initialY: 1,
            previousY: 1,
            currentY: 1,
            currentDirection: 'N',
            moveForward: expect.any(Function),
            turnLeft: expect.any(Function),
            turnRight: expect.any(Function),
            setPrevious: expect.any(Function),
            getInfo: expect.any(Function)
            });
    });
});

describe("turnLeft", () => {
    test("Check turn left returns true and changes object to correct direction", () => {
        expect(testRover.turnLeft()).toBe(true);
        expect(testRover.currentDirection).toMatch('E');
    });
});

describe("turnRight", () => {
    test("Check turn right returns true and changes object to correct direction", () => {
        expect(testRover2.turnRight()).toBe(true);
        expect(testRover2.currentDirection).toMatch('E');
    });
});

// Needs to mock nested function. Research needed!!
/*describe("moveForward", () => {
    //const validateMovement = jest.fn();
    jest.mock("validateMovement");
    test("Check move forward returns true and changes current location correctly", () => {
        //const validateMovementMock = jest.fn();
        //validateMovement.mockImplementation(() => validateMovementMock());
        expect(testRover2.moveForward()).toBe(true);
        expect(validateMovement).toHaveReturnedWith(true);
        expect(testRover3.currentY).toBe(4);
    });
});*/

