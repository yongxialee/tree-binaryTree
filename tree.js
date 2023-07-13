/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    //base case
    if(!this.root) return 0;
    // const node=this.root

    //normal case
    let total = this.root.val;
    function sumHelper(node){
      for(let child of node.children){
        total+=child.val;
        if(child.children.length>0){
          //recurse the child as the root
          sumHelper(child);
        }

      }
      
    }
    sumHelper(this.root);
    return total;


    
    
    
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    // base case
    if(!this.root) return 0;
    let count=this.root.val%2 ===0? 1:0;
    //normal case
    function countHelper(node){
      for(let child of node.children){

      
      if(child.val%2 ===0)
        count ++;
      
       // if it has any children
       if (child.children.length > 0) {
        // recurse with the child as the root
        countHelper(child);
      }
    }
  }
    countHelper(this.root)
    return count;

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    //base case
    if(!this.root) return 0

    //normal case
    let count = this.root.val>lowerBound?1:0;
    function helper(node){
      for( let child of node.children){
        if(child.val>lowerBound){
          count ++
          
        }
        if(child.children.length>0){
          helper(child)
        }
      }
    }
    helper(this.root)
    return count;


  }
}

module.exports = { Tree, TreeNode };
