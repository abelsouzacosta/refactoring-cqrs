import { alertForMiscreant, findMiscreant } from "../src/main";

describe("Alert for miscreant", () => {
  it("Should return a valid result", () => {
    let result = alertForMiscreant(["Don"]);

    expect(result).toStrictEqual("Don");
  });
});

describe("Find Miscreant", () => {
  it("Should return Don", () => {
    let result = findMiscreant(["Don"]);

    expect(result).toStrictEqual("Don");
  });

  it("Should return John", () => {
    let result = findMiscreant(["John"]);

    expect(result).toStrictEqual("John");
  });
});
