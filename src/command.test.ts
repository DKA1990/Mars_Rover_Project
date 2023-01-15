import { 
    validatePlateauInput,
    validateRoverInput,
    validateMovement,
    validateInput 
} from './command';

import { Plateau } from './plateau';
import { initialiseRover, Rover } from './rover';

const testPlateau: Plateau = [
    ['_', '_', '_', '_', '_'],
    ['_', '_', '_', '_', '_'],
    ['_', '_', '1', '_', '_'],
    ['_', '_', '_', '_', '_'],
    ['_', '_', '_', '_', '_'],];

const testRover: Rover = initialiseRover('Henry', 3, 2, 'S');
const testRover2: Rover = initialiseRover('Jimmy', 2, 1, 'N');
const testRover3: Rover = initialiseRover('Boris', 4, 4, 'N');

describe("validatePlateauInput", () => {
    test("Check validation only allows input of 2 numbers", () => {
        expect(validatePlateauInput('5 5')).toEqual(['5', '5']);
        expect(validatePlateauInput('4 5 3')).toEqual([]);
        expect(validatePlateauInput('Hello world')).toEqual([]);
    });
});

describe("validateRoverInput", () => {
    test("Check validation only allows input of X X N, where x are numbers and N is one of N,E,S,W", () => {
        expect(validateRoverInput('1 1 N', testPlateau)).toEqual(['1', '1', 'N']);
        expect(validateRoverInput('2 3 S', testPlateau)).toEqual(['2', '3', 'S']);
    });
    test("Check validation does not allow location greater than plateau size", () => {
        expect(validateRoverInput('6 7 N', testPlateau)).toEqual([]);
    });
});

describe("validateMovement", () => {
    test("Check movement to blank space returns true", () => {
        expect(validateMovement(testPlateau, testRover)).toBe(true);
    });
    test("Check movement to occupied space returns false", () => {
        expect(validateMovement(testPlateau, testRover2)).toBe(false);
    });
    test("Check movement out of array bounds returns false", () => {
        expect(validateMovement(testPlateau, testRover3)).toBe(false);
    });
});

describe("validateInput", () => {
    test("Check validation only allows characters M R L", () => {
        expect(validateInput('MMLRM')).toEqual(['M', 'M', 'L', 'R', 'M']);
        expect(validateInput('MMLYRM')).toEqual([]);
    });
    test("Check validation only allows characters S D Q ? as single characters", () => {
        expect(validateInput('S')).toEqual(['S']);
        expect(validateInput('D')).toEqual(['D']);
        expect(validateInput('Q')).toEqual(['Q']);
        expect(validateInput('?')).toEqual(['?']);
        expect(validateInput('D?')).toEqual([]);
        expect(validateInput('SQ')).toEqual([]);
    });
});