import {
    initialiseRover
} from "./rover";

describe("initialiseRover", () => {
    test("Creates a rover object", () => {
        expect(initialiseRover("Odessey", 1, 1, "N")).toEqual([]);
    });
});