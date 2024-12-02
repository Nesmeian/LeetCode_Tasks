// My solution
function isValid(s) {
  const stack = [];
  const checkObj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let char of s) {
    if (checkObj[char]) {
      stack.push(char);
    } else {
      if (stack.length === 0 || checkObj[stack.pop()] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
//Best Solution
var isValid = function (s) {
  const charMap = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);

  const stack = [];
  for (const char of s) {
    if (charMap.has(char)) {
      stack.push(charMap.get(char));
    } else {
      if (stack.length === 0 || stack.pop() !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
