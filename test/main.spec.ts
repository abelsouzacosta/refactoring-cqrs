import { alertForMiscreant } from "../src/main";

describe("Alert for miscreant", () => {
  it("Should return a valid result", () => {
    let result = alertForMiscreant(["Don"]);

    expect(result).toStrictEqual("Don");
  });
});
