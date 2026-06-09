class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // sort and check in map
        const map = new Map();

        for (let i =0; i<strs.length; i++) {
            let sorted = strs[i].split("").sort().join("");

            // check in map -> group them
            if (map.has(sorted)){
                map.set(sorted, [...map.get(sorted), strs[i]]);
            } else {
                map.set(sorted, [strs[i]]);
            }
        }

        // iterate and add to a list
        const result = [];
        for (const str of map.values()) {
            result.push(str);
        }

        return result;
    }
}



















function prev() {
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