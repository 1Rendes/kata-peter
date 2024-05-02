const exp = require("constants");

// const { log } = require("console");

function checkPunct(word) {
  return (
    word.endsWith("!") ||
    word.endsWith(".") ||
    word.endsWith(",") ||
    word.endsWith("?")
  );
}

function makeCorrectString(inputString, allowedWords) {
  let words = inputString.split(" ");
  const filteredWords = words.filter((word) => word !== "");
  const outputArray = [];
  const punctObj = {};

  let outputString = "";
  for (let word of filteredWords) {
    const wordWithoutPunctiation = checkPunct(word)
      ? word.substring(0, word.length - 1)
      : word;
    console.log(wordWithoutPunctiation);
    if (!allowedWords.includes(wordWithoutPunctiation)) {
      const number = checkPunct(word) ? 2 : 1;
      let chars = word.split("");
      for (let i = 1; i < word.length - number; i++) {
        chars.splice(i, 1, "*");
      }
      word = chars.join("");
      // word[i] = "*";
    }
    outputArray.push(word);
  }
  outputString = outputArray.join(" ");
  console.log(outputString);
  return outputString;
}

module.exports = makeCorrectString;
