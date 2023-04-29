const { Tree, Node } = require("./library/tree.js");
const logTree = require("console-log-tree");

let tree = new Tree("html");
tree.add("body", "html");
tree.add("head", "html");
tree.add("div", "body");

console.log(tree);
