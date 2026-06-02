class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const occured = new Map();

    for (let i = 0; i< nums.length; i++) {
        if (occured.has(nums[i])){
            occured.set(nums[i], occured.get(nums[i])+1);
        } else {
            occured.set(nums[i], 1);
        }
    }

    const sortedOccurance = [];
    
    for (const [key, value] of occured) {
        sortedOccurance.push([key, value]);
    }

    return sortedOccurance.sort((a, b) => b[1] - a[1]).map((e) => e[0]).slice(0, k);
    }
}
