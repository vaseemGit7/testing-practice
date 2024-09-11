import caeserCipher from "../modules/caesarCipher";

test('"abcd" with 2 character shift becomes "cdef"', () => {
  expect(caeserCipher("abcd", 2)).toBe("cdef");
});

test('"xyz" with 3 character shift becomes "abc"', () => {
  expect(caeserCipher("xyz", 3)).toBe("abc");
});

test('"heLLo" with 4 character shift becomes "liPPs"', () => {
  expect(caeserCipher("heLLo", 4)).toBe("liPPs");
});

test('"How are you, John?" with 2 character shift becomes "Jqy ctg aqw, Lqjp?"', () => {
  expect(caeserCipher("How are you, John?", 2)).toBe("Jqy ctg aqw, Lqjp?");
});
