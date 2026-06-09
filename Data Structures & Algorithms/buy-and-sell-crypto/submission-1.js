class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // profit = maxPrice - minPrice
        let maxProfit = 0;
        let minPrice = prices[0];

        for (let i = 0; i < prices.length; i++) {
            // check if it is the new low
            minPrice = Math.min(prices[i], minPrice);

            // calc profit
            const profit = prices[i] - minPrice;
            // check if new max profit
            maxProfit = Math.max(profit, maxProfit)
        }

        return maxProfit;
    }
}
