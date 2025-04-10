const reverse = require("./src/reverseString");

describe("#capitalize()", () => {
  it("should return Test", () => {
    expect(reverse("test")).toEqual("tset");
  });
  it("should return Never", () => {
    expect(reverse("never")).toEqual("reven");
  });
  it("should return GiANt", () => {
    expect(reverse("giANt")).toEqual("tNAig");
  });
});
