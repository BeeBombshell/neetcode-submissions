class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numbers = new Map();

        for (let i=0; i<nums.length; i++) {
            const numNeeded = target - nums[i];

            if (numbers.has(numNeeded)) return [ numbers.get(numNeeded), i];
            numbers.set(nums[i], i);
        }
    }
}
