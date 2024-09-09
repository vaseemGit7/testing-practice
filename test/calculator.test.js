import calculator from "../modules/calculator";

test("add(1,1) should result 2", () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test("add(-15,10) should result -5", () => {
  expect(calculator.add(-15, 10)).toBe(-5);
});

test('add("a",10) should result "Invalid argument"', () => {
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

test("multiply(15,3) should result 45", () => {
  expect(calculator.multiply(15, 3)).toBe(45);
});

test("multiply(-5,2) should result -10", () => {
  expect(calculator.multiply(-5, 2)).toBe(-10);
});

test('multiply("ten",40) should result "Invalid argument"', () => {
  expect(calculator.multiply("ten", 40)).toBe("Invalid argument");
});

test("divide(100,4) should result 25", () => {
  expect(calculator.divide(100, 4)).toBe(25);
});

test("divide(0.8,0.2) should result 4", () => {
  expect(calculator.divide(0.8, 0.2)).toBe(4);
});

test('divide(1, null) should result "Invalid argument"', () => {
  expect(calculator.divide(1, null)).toBe("Invalid argument");
});
