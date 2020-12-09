//快速选择 方法

const findKthLargest = (nums, k) => {
  return quickSelect(nums, 0, nums.length - 1, k);
};

const quickSelect = (nums, lo, hi, k) => {
  // 避免最坏情况发生
  const p = Math.floor(Math.random() * (hi - lo + 1)) + lo;
  swap(nums, p, hi);

  let i = lo;
  let j = lo;

  while (j < hi) {
    if (nums[j] <= nums[hi]) {
      swap(nums, i++, j);
    }
    j++;
  }
  swap(nums, i, j);
  // pivot 是我们要找的 Top k
  if (hi === k + i - 1) return nums[i];
  // Top k 在右边
  if (hi > k + i - 1) return quickSelect(nums, i + 1, hi, k);
  // Top k 在左边
  return quickSelect(nums, lo, i - 1, k - (hi - i + 1));
};
//时间复杂度O(n),最坏的情况O(n²)

const swap = (nums, i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]]);
