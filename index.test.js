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

test("Test makeCorrectString function", () => {
  expect(
    makeCorrectString("Hello! How are you? Fine.", ["Hello", "Fine"])
  ).toBe("Hello! H*w a*e y*u? Fine.");
});
