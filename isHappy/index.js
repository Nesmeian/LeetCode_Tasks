//My solution
function isHappy(n, process = []) {
  let nSplit = String(n).split("");
  let result = nSplit.reduce((acum, e) => acum + e ** 2, 0);
  if (result === 1) {
    return true;
  }
  if (process.includes(result)) {
    return false;
  }
  return isHappy(result, [...process, result]);
}

//Best solution
var isHappy = function (n) {
  const set = new Set(); //create a set to store  enountered numbers
  let j = n; //init j with value n

  while (j !== 1) {
    //while j is not equal 1
    if (set.has(j)) return false; //if j is already in the set we're in a cycle, return false
    set.add(j); // add curent value j on Set

    let sum = 0; //initialize sum to calculate the sum of squares
    let x = j; //create copy of j for processing

    while (x) {
      //while x not equal 0
      sum += Math.pow(x % 10, 2); //extract the last digit(x % 10),squar it,and add to sum
      x = (x / 10) | 0; //delete last number,use bite operator | for round down
    }

    j = sum; //update j on new sum
  }

  return true; //if we exit the loop, then j === 1 return true
};
