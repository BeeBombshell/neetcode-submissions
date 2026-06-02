class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const convertedNums = new Set(nums);

        return convertedNums.size !== nums.length;

    }
}
