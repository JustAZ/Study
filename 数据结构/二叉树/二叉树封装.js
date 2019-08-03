function BinaryTree() {

    function Node(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
    //根节点
    this.root = null;

    //插入节点
    BinaryTree.prototype.insertNode = function (key) {
        let node = new Node(key)
        if (this.root == null) {
            this.root = node;
        } else {
            //递归调用,查找节点
            this.insert(this.root,node);

        }
    }
    //递归
    BinaryTree.prototype.insert = function (node, newNode) {
        if (node.key > newNode.key) {
            //向左查询
            if (node.left == null) {//node的左子树上没有内容
                node.left = newNode;
            } else {//node的左子树上已经有了内容
                this.insert(node.left, newNode)
            }
        } else if (node.key < newNode.key) {
            //向右查询
            if (node.right == null) {
                node.right = newNode;
            } else {
                this.insert(node.right, newNode)
            }
        }

    }
    /**
     * 树的遍历
     */
    //前序遍历 根左右 先处理根节点
    BinaryTree.prototype.frontOrder = function (handler) {
        this.frontOrderNode(this.root, handler);
    }
    BinaryTree.prototype.frontOrderNode = function (node, handler) {
        if (node !== null) {
            // let orderList = [];
            // orderList.push(node.key);

            //处理经过的节点
            handler(node.key)
            // console.log(node.key)
            //遍历左节点,直到叶子节点
            this.frontOrderNode(node.left,handler)
            //处理右经过的右节点
            this.frontOrderNode(node.right,handler)

            // return orderList;
        }
    }
    //中序
    BinaryTree.prototype.middleOrder = function (handler) {
        this.middleOrderNode(this.root, handler);
    }
    BinaryTree.prototype.middleOrderNode = function (node, handler) {
        if (node !== null) {
            // let orderList = [];
            // orderList.push(node.key);

            //处理经过的节点
            // console.log(node.key)
            //遍历左节点,直到叶子节点
            this.middleOrderNode(node.left,handler)
            handler(node.key)            
            //处理右经过的右节点
            this.middleOrderNode(node.right,handler)

            // return orderList;
        }
    }
    //后续
    BinaryTree.prototype.backOrder = function(handler){
        this.backOrderNode(this.root,handler)
    }
    BinaryTree.prototype.backOrderNode = function(node,handler){
        if(node != null){
            
            this.backOrderNode(node)
            this.backOrderNode(node)
            handler(node.key)
        }
    }
}

let bT = new BinaryTree();

bT.insertNode(11)
bT.insertNode(7)
bT.insertNode(15)
bT.insertNode(15)
bT.insertNode(3)
bT.insertNode(9)
bT.insertNode(8)
bT.insertNode(10)
bT.insertNode(13)
bT.insertNode(12)
bT.insertNode(14)
bT.insertNode(20)
bT.insertNode(18)
bT.insertNode(25)
bT.insertNode(6)

// console.log(bT.frontOrder())
let result = ""
bT.frontOrder(function (key) {
    result += key + " "
})
console.log(result)
