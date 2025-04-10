const capitalize = require("./src/capitalize");

describe("#capitalize()", () => {
  it("should return Test", () => {
    expect(capitalize("test")).toEqual("Test");
  });
  it("should return Never", () => {
    expect(capitalize("never")).toEqual("Never");
  });
  it("should return GiANt", () => {
    expect(capitalize("giANt")).toEqual("GiANt");
  });
});
