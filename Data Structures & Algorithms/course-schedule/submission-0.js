class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        // create an adjacency list
        const graph = Array.from({ length: numCourses }, () => []);

        // populate the graph
        for (const [course, prereq] of prerequisites){
            graph[prereq].push(course);
        }

        /*
        maintain state
            0 - unvisited
            1 - currently visiting
            2 - completed
        **/
        const state = new Array(numCourses).fill(0);

        const dfs = (course) => {
            // if state = 1 - already in current path
            // cycle found
            if (state[course] === 1){
                return false;
            }

            // if state = 2 - completed
            if (state[course] === 2){
                return true;
            }

            // mark node as visiting
            state[course] = 1;

            // explore neighbors
            for (const nextCourse of graph[course]){
                if (!dfs(nextCourse)) {
                    return false;
                }
            }

            // mark as complete
            state[course] = 2;

            return true;
        }

        // check for all courses
        for (let course = 0; course < numCourses; course++){
            if(!dfs(course)){
                return false;
            }
        }

        return true;
    }
}
