import { checkForName } from "../src/client/js/nameChecker"

describe("Testing the check for name existence", () => {
    test("Testing the checkForName() function", () => {
        expect(checkForName).toBeDefined();
    })
});