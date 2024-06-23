/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
/* Using DFS Topological Sorting*/

function dfs(adj, visited, node, instack){
    if(instack[node]){
        return true; // cycle exist
    }
    if(visited[node]){
        return false;
    }

    visited[node] = true;
    instack[node] = true;
    for(let neighbour of adj[node]){
        if(dfs(adj, visited, neighbour, instack)){
            return true;
        }
    }
    instack[node]=false;
    return false;
}
var canFinish = function(numCourses, prerequisites) {
    const adj = Array(numCourses).fill([]);

    for(let [course, prereq] of prerequisites){
        adj[prereq] = [...adj[prereq], course]
    }
    const instack = [];
    const visited = []
    for(let i = 0; i< adj.length;i++){
        if(dfs(adj, visited, i, instack)){
            return false;
        };
    }
    return true;
};