import { myPush } from "./function.js";

describe("Given the function myPush", () => {
    test("Add the 'Last element' string at the end the given array1, and return the array1's length.", () => {
        const array1 = ["First element", "Second element", "Third element"];
        expect(myPush(array1, "Last element")).toEqual(
            (array1.length = 4)
        );
    })})