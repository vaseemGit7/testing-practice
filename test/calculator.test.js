import calculator from "../modules/calculator";

test("add(1,1) should result 2", () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test("add(-15,10) should result -5", () => {
  expect(calculator.add(-15, 10)).toBe(-5);
});

test('add("a",10) should result "Invalid arguement"', () => {
  expect(calculator.add("a", 10)).toBe("Invalid argument");
});

test("subtract(10,4) should result 6", () => {
  expect(calculator.subtract(10, 4)).toBe(6);
});

test("subtract(0.6,0.4) should result 0.2", () => {
  expect(calculator.subtract(0.6, 0.4)).toBeCloseTo(0.2);
});

test('subtract(100, "hundred") should result "Invalid argument"', () => {
  expect(calculator.subtract(100, "hundred")).toBe("Invalid argument");
});
