class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const strings = new Map();

    for (let i=0; i<strs.length; i++) {
        const sortedString = strs[i].split("").sort().join("");

        if (strings.has(sortedString)) {
            strings.set(sortedString, [...strings.get(sortedString), strs[i] ]);
        } else {
            strings.set(sortedString, [strs[i]]);
        }
    }

    const result = [];
    for (const value of strings.values()) {
        result.push(value)
    }
    return result;
    }
}
