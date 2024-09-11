const alphabet = "abcdefghijklmnopqrstuvwxyz";

const caeserCipher = (string, shift) => {
  const cipherString = [];

  for (let i = 0; i < string.length; i++) {
    let currentChar = string[i];
    if (/[a-zA-Z]/.test(currentChar)) {
      let arrayIndex =
        (alphabet.indexOf(currentChar.toLowerCase()) + shift) % alphabet.length;
      if (currentChar === currentChar.toUpperCase()) {
        cipherString.push(alphabet[arrayIndex].toUpperCase());
      } else {
        cipherString.push(alphabet[arrayIndex]);
      }
    } else {
      cipherString.push(currentChar);
    }
  }

  return cipherString.join("");
};
export default caeserCipher;
