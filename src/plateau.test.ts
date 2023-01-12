import {
    initialisePlateau
} from "./plateau";

describe("initialisePlateau", () => {
    test("Creates a plateau array of size 5x5", () => {
        expect(initialisePlateau(5, 5)).toEqual([]);
    });
});