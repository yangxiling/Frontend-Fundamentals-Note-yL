/*
 * @discription:
 * @param:{number[]},nums
 * return {number}
 */
function lis(nums) {
  if (nums.length < 2) return nums.length;
  let dp = new Array(nums.length).fill(1);
  let max = 1;
  for (let i = 1; i < nums.length; ++i) {
    for (let j = 0; j < i; ++j) {
      if (nums[j] < nums[i]) { //计算当前arr[j]这个位置有几个比它小的数，且是有序严格小于
        dp[i] = Math.max(dp[i], dp[j] + 1); //arr[i]就能取到它前面子序列中最大的长度
      }
    }
    max = Math.max(max, dp[i])
  }
  return max;
}
lis([10, 2, 7, 3, 4, 5, 9])//5