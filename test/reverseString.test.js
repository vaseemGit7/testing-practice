import reverseString from "../modules/reverseString";

test('"abcd" should become "dcba"', () => {
  expect(reverseString("abcd")).toBe("dcba");
});

test('"This is a sentence" should become "ecenetnes a si sihT"', () => {
  expect(reverseString("This is a sentence")).toBe("ecnetnes a si sihT");
});

test('"This has numbers, 12345" should become "54321 ,srebmun sah sihT"', () => {
  expect(reverseString("This has numbers, 12345")).toBe(
    "54321 ,srebmun sah sihT"
  );
});

test('12345 becomes "Not a string"', () => {
  expect(reverseString(12345)).toBe("Not a string");
});
