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
