class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0;
        let right = height.length - 1;
        let maxLeft = 0;
        let maxRight = 0;
        let area=0;


        while(left < right) {
            
            // calculate area - when h[left] < h[Lmax] + increment left
            // just increment Lmax - when h[left] > h[Lmax]

            if (height[left] <= height[right]) {
                if(height[left] < maxLeft) {
                    area += maxLeft-height[left];
                } else {
                    maxLeft = height[left];
                }
                left++;
            } else {
                // calculate area - when h[right] < h[Hmax] + increment right
                // just increment Rmax - when h[right] > h[Rmax]
                if (height[right] < maxRight ) {
                    area += maxRight-height[right]
                } else {
                    maxRight=height[right];
                }
                right--;

            }

        }
        return area;
    }
}
