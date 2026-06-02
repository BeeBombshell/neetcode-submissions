class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;

        let ma = 0;

        while (left < right) {
            let width = right - left;
            let minHeight = Math.min(heights[left], heights[right]);

            ma = Math.max(ma, (width * minHeight));

            if(heights[left] < heights[right]){
                left++;
            } else {
                right--;
            }
        }
        return ma;
    }
}
