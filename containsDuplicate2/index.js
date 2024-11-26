function containsNearbyDuplicate(nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const lastIndex = map.get(nums[i]);
      if (i - lastIndex <= k) {
        return true;
      }
    }
    map.set(nums[i], i);
  }
  return false;
}
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
