const capitalize = (string) => {
  if (typeof string !== "string" || string.length === 0) {
    throw new Error("Invalid input");
  }
  return string.slice(0, 1).toUpperCase() + string.slice(1);
};

export default capitalize;
