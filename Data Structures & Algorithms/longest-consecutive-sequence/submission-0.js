class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        
        // set for O(1) lookup
        const numSet = new Set(nums);

        let maxLength = 0;

        for (let num of numSet) {
            let currentLength =1;
            let currentNumber = num;
            // start count only if first element
            if (!numSet.has(num-1)) {
                while(numSet.has(currentNumber+1)){
                    currentLength++;
                    currentNumber++;
                }
            }
            maxLength = Math.max(maxLength, currentLength);
        }
        return maxLength;
    }
}
