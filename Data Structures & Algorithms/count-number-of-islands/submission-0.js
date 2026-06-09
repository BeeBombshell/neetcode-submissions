class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        // track islands found
        let islands = 0;

        // dfs function
        const dfs = (row, col) => {
            // define bounds
            if(row < 0 ||
                col < 0 ||
                row >= grid.length ||
                col >= grid[0].length ||
                grid[row][col] === "0") {
                    return;
                }

            // mark as visited
            grid[row][col] = "0";

            // run dfs for neighbours
            dfs(row + 1, col); // up
            dfs(row - 1, col); // down
            dfs(row, col + 1); // right
            dfs(row, col - 1); // left
        }

        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[0].length; col++) {
                if (grid[row][col] === "1"){
                    islands++;
                    dfs(row,col);
                }
            }
        }

        return islands;
    }
}
