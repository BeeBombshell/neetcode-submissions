class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const minCoins = new Array(amount+1).fill(Infinity);
        minCoins[0] = 0;

        // check for each number until amount
        for (let i = 1; i<=amount; i++) {
            // check for each denomination
            for (const coin of coins) {
                // check only if current number >= denomination
                if (i >= coin) {
                    // select the minimum of minCoins req for (i or coins-i+1)
                    // +1 to account for the 'i' coin
                    minCoins[i] = Math.min(minCoins[i], minCoins[i-coin] +1)
                }
            }
        }

        return minCoins[amount] === Infinity ? -1 : minCoins[amount];
    }
}
