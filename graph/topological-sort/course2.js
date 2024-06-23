/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
// Using Kahn's Algorithm

    var findOrder = function(numCourses, prerequisites) {
        const result = [];
        const indegree = Array(numCourses).fill(0);
        const adj = Array(numCourses).fill([])
        const q = [];
    
        //build adj graph & indegree
        for(let [course, prereq] of prerequisites){
            adj[prereq] = [...adj[prereq], course];
            indegree[course] += 1;
        }
    
        indegree.forEach((degree, course) => {if(degree === 0) q.push(course)})
    
        while(q.length){
            let prereq = q.pop();
            result.push(prereq);
    
            for(let course of adj[prereq]){
                indegree[course] -= 1;
                if(indegree[course] == 0) q.push(course);
            }
        }
    
        if(indegree.every((degree) => degree === 0)) return result;
        return [];
    };