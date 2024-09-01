import capitalize from "../modules/capitalize";

test('"test" should become "Test', () => {
  expect(capitalize("test")).toBe("Test");
});

test('"captialize" should become "Capitalize"', () => {
  expect(capitalize("capitalize")).toBe("Capitalize");
});

test('"three word test" should become "Three word test"', () => {
  expect(capitalize("three word test")).toBe("Three word test");
});

test('"a" should become "A"', () => {
  expect(() => capitalize("a").toBe("A"));
});

test("throws an error for empty string", () => {
  expect(() => capitalize("")).toThrow("Invalid input");
});

test("throws an error for non-string values", () => {
  expect(() => capitalize(123)).toThrow("Invalid input");
  expect(() => capitalize(null)).toThrow("Invalid input");
  expect(() => capitalize(undefined)).toThrow("Invalid input");
});
