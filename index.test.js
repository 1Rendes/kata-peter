// index.test.js
const makeCorrectString = require("./index");

test("Test makeCorrectString function", () => {
  expect(makeCorrectString("Hey", ["hi"])).toBe("H*y");
});

test("Test makeCorrectString function", () => {
  expect(makeCorrectString("Hey! ", ["hi"])).toBe("H*y!");
});

test("Test makeCorrectString function", () => {
  expect(makeCorrectString("Hello! ", ["Hello"])).toBe("Hello!");
});
