const pali = word => {
  if (word === null) throw new Error("null case");
  if (typeof word !== "string") throw new Error("not a string");

  let lowStr = word.toLowerCase().replace(/\s/g, "");
  let reversed = lowStr
    .split("")
    .reverse()
    .join("");

  return reversed === lowStr;
};

describe("pali", () => {
  test("Input is not a string", () => {
    expect(() => {
      pali(5);
    }).toThrow(new Error("not a string"));
  });
  test("null case", () => {
    expect(() => {
      pali(null);
    }).toThrow(new Error("null case"));
  });

  test("Mom", () => {
    expect(pali("Mom")).toEqual(true);
  });
  test("mom mom", () => {
    expect(pali("mom mom")).toEqual(true);
  });
  test("mom dad", () => {
    expect(pali("mom dad")).toEqual(false);
  });
  test("empty space", () => {
    expect(pali("")).toEqual(true);
  });
});
