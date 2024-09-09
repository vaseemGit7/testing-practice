const isValidArgument = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return false;
  } else {
    return true;
  }
};

const add = (num1, num2) => {
  if (isValidArgument(num1, num2)) {
    return num1 + num2;
  } else {
    return "Invalid argument";
  }
};

const subtract = (num1, num2) => {
  if (isValidArgument(num1, num2)) {
    return num1 - num2;
  } else {
    return "Invalid argument";
  }
};

const calculator = { add, subtract };

export default calculator;
