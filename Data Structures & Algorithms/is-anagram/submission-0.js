class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // return sortedString(s) === sortedString(t);

    if (s.length !== t.length) return false;

    const countMap = new Map();

    for (let i = 0; i < s.length; i++) {
        if (countMap.has(s[i])) {
            countMap.set(s[i], countMap.get(s[i]) + 1);
        } else {
            countMap.set(s[i], 1);
        }

        if (countMap.has(t[i])) {
            countMap.set(t[i], countMap.get(t[i]) - 1);
        } else {
            countMap.set(t[i], -1);
        }
    }

    const keys = Array.from(countMap.keys());

    for (let j = 0; j < keys.length; j++) {
        if (countMap.get(keys[j]) !== 0) return false;
    }
    return true;

    }
}
