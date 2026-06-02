class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // const convertedNums = new Set(nums);
        // return convertedNums.size !== nums.length;

        const visitedNums = new Map();

        for (let i = 0; i < nums.length; i++) {
            if (visitedNums.has(nums[i])) return true;
            else visitedNums.set(nums[i], undefined);
        }
        return false;
    }
}
