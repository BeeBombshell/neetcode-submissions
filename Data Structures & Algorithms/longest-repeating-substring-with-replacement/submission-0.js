class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let maxLength = 0;
        let maxFreq = 0;
        let left = 0;
        let freq = {};

        for (let right = 0; right < s.length; right++) {
            // update char count
            freq[s[right]] = (freq[s[right]] || 0) + 1;

            // update maxFreq
            maxFreq = Math.max(maxFreq, freq[s[right]]);

            while((right - left +1) - maxFreq > k) {
                // move left towards right
                freq[s[left]]--;
                left++;
            }

            maxLength = Math.max(right - left +1);
        }

        return maxLength;
    }
}
