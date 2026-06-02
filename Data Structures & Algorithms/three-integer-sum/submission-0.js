class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a-b);
        const result = new Array();

        for(let i=0; i<nums.length-1; i++){
            let remainingSum = -nums[i];
            let left = i+1;
            let right = nums.length-1;
            
            // if +ve number is found, no negatives afterwards (sorted array)
            if(nums[i] > 0) break;
            // to check for duplicates by checking prev (sorted)
            if((left<right) &&(nums[i] === nums[i-1])) continue;

            while(left < right) {
                if(nums[left] + nums[right] === remainingSum){
                    result.push([
                        nums[i],
                        nums[left],
                        nums[right]
                   ])
                   left++;
                   right--;

                    while((left < right) && nums[left]=== nums[left-1]) {
                        left++;
                    }

                } else if(nums[left] + nums[right] < remainingSum){
                    left++;
                } else {
                    right--;
                }
            }
        }
        return result;
    }
}
