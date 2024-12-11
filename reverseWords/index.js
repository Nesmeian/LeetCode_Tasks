function reverseWords(str) {
  return str.split(" ").reverse().join(" ").replace(/\s+/g, " ").trim();
}
console.log(reverseWords("  hello world  "));
