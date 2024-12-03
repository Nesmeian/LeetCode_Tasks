//my solution
function maxProfit(prices) {
  let count = 0;
  let currentCount = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i + 1]) {
      currentCount += prices[i + 1] - prices[i];
    } else {
      count += currentCount;
      currentCount = 0;
    }
  }
  return count;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4])); //7
console.log(maxProfit([1, 2, 3, 4, 5])); //4
console.log(maxProfit([7, 6, 4, 3, 1])); //0

//best Solution
var maxProfit = function (prices) {
  let buyPrice = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
};
