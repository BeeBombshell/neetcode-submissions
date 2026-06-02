class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const arrLength = nums.length;
    const result = new Array(arrLength).fill(1);
    
    let prefixProduct = 1;
    let suffixProduct = 1;
    
    for (let i = 0; i < arrLength; i++) {
        const j = arrLength - 1 - i;
        
        result[i] *= prefixProduct;
        prefixProduct *= nums[i];
        
        result[j] *= suffixProduct;
        suffixProduct *= nums[j];
    }
    
    return result;
    }
}
