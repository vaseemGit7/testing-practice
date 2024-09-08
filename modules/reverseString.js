const reverseString = (string) => {
  if (typeof string === "string") {
    return string.split("").reverse().join("");
  } else {
    return "Not a string";
  }
};

export default reverseString;
