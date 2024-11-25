// My solution
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let k = i + 1; k < nums.length; k++) {
      if (nums[i] + nums[k] === target) {
        return [i, k];
      }
    }
  }
}
// Best solution
function twoSum(nums, target) {
  const store = { [nums[0]]: 1 };

  for (let i = 1; i < nums.length; i++) {
    if (store[target - nums[i]]) {
      return [store[target - nums[i]] - 1, i];
    } else {
      store[nums[i]] = i + 1;
    }
  }
}
