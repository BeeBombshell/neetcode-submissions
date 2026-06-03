class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // keep track of chars - set
        const charSet = new Set();

        let maxLength = 0;
        let length = 0;
        let left = 0;

        for (let right = 0; right < s.length; right++) {
            // if duplicate is found
            while (charSet.has(s[right])) {
                // keep removing chars from set until duplicate is gone
                charSet.delete(s[left]);
                length--;
                left++;
            }

            // check from the same case
            charSet.add(s[right]);
            length++;
            maxLength = Math.max(maxLength, length);
        }
        return maxLength;
    }
}
