/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    if(n < 2){
        return [0];
    }
    const adj = Array(n).fill(0).map(() => new Set())

    // create the adj graph
    for(let [start, end] of edges){
        adj[start] = adj[start].add(end)
        adj[end] = adj[end].add(start);
    }

    //Set initial leaves
    let leaves = [];
    adj.forEach((setOfNode, node) => {
        if(setOfNode.size == 1) leaves.push(node);
    })

    let numberOfLeaves = n;
    while(numberOfLeaves > 2){
        numberOfLeaves -= leaves.length;
        let newLeaves = [];
        for(let leaf of leaves){
            adj[leaf].forEach((node) => {
                adj[node].delete(leaf);
                if(adj[node].size == 1) newLeaves.push(node);
            });
            
        }
        leaves = newLeaves;
    }
    return leaves;
};

/*
    Key insights
        1. There can only be 1 or 2 centoids in a minimum height trees. Centoids are node which are closest to max nodes, especially leaf nodes.
*/