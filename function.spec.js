import { strictEquals } from "./function.js";

//pasado a testing con jest el challenge 2 de la segunda semana
describe("Give the function strctEqual", () => {
    describe("When it receives the parameters 1 and 1", () => {
        test("should return true", () => {
            expect(strictEquals(1, 1)).toBe(true); // test es una variable aquí, puede llamarse de cualquier forma
        });
    });
});
