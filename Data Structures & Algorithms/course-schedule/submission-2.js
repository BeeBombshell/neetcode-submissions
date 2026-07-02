class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        /* 
        course can be taken if it has 0 remaining prerequisites
        // 1. calc indegrees for every course
        // 2. put all courses w 0 indegrees in a queue
        // 3. take a course from queue
        // 4. complete it by reducing indegrees of dependent course
        // 5. if any dependent course reaches 0 indegree -> add to queue
        // 6. count courses processed -> if all done = no cycle
        **/

        // create adjacency matrix
        const graph = Array.from({ length: numCourses }, () => []);

        // indegree - no. of prereqs
        const indegree = new Array(numCourses).fill(0);

        for (const [course, prereq] of prerequisites) {
            // populate graph
            graph[prereq].push(course);
            // calc indegree for course
            indegree[course]++;
        }

        const queue = [];

        // start with courses having no prereqs
        for (let i = 0; i<numCourses; i++){
            if (indegree[i] === 0){
                queue.push(i)
            }
        }

        let processed = 0;
        let front = 0;

        while(front < queue.length){
            const course = queue[front++];
            processed++;

            // remove course from graph
            for(const nextCourse of graph[course]){
                indegree[nextCourse]--;

                // new course became available
                if(indegree[nextCourse] === 0){
                    queue.push(nextCourse);
                }
            }
        }

        // if all courses processed
        return processed === numCourses;
    }
}









function adjacencyDFSSolution() {
    // create an adjacency list
    const graph = Array.from({ length: numCourses }, () => []);

    // populate the graph
    for (const [course, prereq] of prerequisites) {
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
        if (state[course] === 1) {
            return false;
        }

        // if state = 2 - completed
        if (state[course] === 2) {
            return true;
        }

        // mark node as visiting
        state[course] = 1;

        // explore neighbors
        for (const nextCourse of graph[course]) {
            if (!dfs(nextCourse)) {
                return false;
            }
        }

        // mark as complete
        state[course] = 2;

        return true;
    };

    // check for all courses
    for (let course = 0; course < numCourses; course++) {
        if (!dfs(course)) {
            return false;
        }
    }

    return true;
}
