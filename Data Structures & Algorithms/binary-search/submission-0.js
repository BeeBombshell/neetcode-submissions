class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length -1;

        while(left <= right) {
            const mid = Math.floor((left+right)/2);

            if (target === nums[mid]){
                return mid;
            }

            if (target > nums[mid]){
                // eliminate left
                left = mid + 1;
            } else {
                // eliminate right
                right = mid - 1;
            }
        }

        return -1;
    }
}
