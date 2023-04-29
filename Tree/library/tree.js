class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
    this.parent = null;
  }
}

class Tree {
  constructor(data) {
    let node = new Node(data);
    this.root = node;
  }
  add(data, parentData) {
    let node = new Node(data);
    let parent = this.find(parentData);
    if (parent) {
      parent.children.push(node);
      node.parent = parent;
      return node;
    } else {
      console.log("Parent not found :" + parentData);
    }
  }
  find(data, node = this.root) {
    if (node.data == data) {
      return node;
    }
    for(let child of node.children){
      console.log(this);
      if (this.find(data, child)) {
        return child;
      }
    };
    return null;
  }
}

module.exports = { Node, Tree };
