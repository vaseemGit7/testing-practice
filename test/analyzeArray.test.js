import analyzeArray from "../modules/analyzeArray";

test("The average of the array is 4", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({ average: 4 });
});

test("The min value of the array is 1", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({ min: 1 });
});

test("The max value of the array is 8", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({ max: 8 });
});

test("The length of the array is 6", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({ length: 6 });
});

test("The following object should be matched", () => {
  expect(analyzeArray([10, 8, 5, 3, 4, 6])).toEqual({
    average: 6,
    min: 3,
    max: 10,
    length: 6,
  });
});
