function printAllNodes(root){
    if(!root) return;
    
    for(let i =0;i<root.children.length; i++){
        printAllNodes(root.children[i]);
    }
    console.log(root);
}

function querySelector(val){

}