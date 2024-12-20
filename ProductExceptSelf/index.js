function productExceptSelf(nums) {
  let result = Array(nums.length).fill("");

  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }
  let suf = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= suf;
    suf *= nums[i];
  }
  return result;
}
console.log(productExceptSelf([1, 2, 3, 4]));
