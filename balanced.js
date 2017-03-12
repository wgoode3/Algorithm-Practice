// binary search trees
function BSTNode(val){
    this.val = val;
    this.left = null;
    this.right = null;
}
function BST(){
    this.root = null;
    this.add = function(val){
        if (this.root == null){
            this.root = new BSTNode(val);
            return this;
        } else {
            var runner  = this.root;
            while(runner){
                if (runner.val > val){
                    if (runner.left){
                        runner = runner.left;
                    } else {
                        runner.left = new BSTNode(val);
                        return this;
                    }        
                } else {
                    if (runner.right){
                        runner = runner.right;
                    } else {
                        runner.right = new BSTNode(val);
                        return this;
                    }
                }
            }
        }
    }
    this.height = function(){
        var largest = 0;
        function helper(runner, count){
            if (runner.left){
                helper(runner.left, ++count);
            }
            if (runner.right){
                helper(runner.right, ++count);
            }
            if (count > largest){
                largest = count;
            }
        }
        helper(this.root, 1);
        return largest;
    }
    this.height2 = function(node){
        if (!node) {
            return 0;
        }
        var left = this.height2(node.left);
        var right = this.height2(node.right);
        return Math.max(left, right)+1;
    }
    this.contains = function(val){
        var runner = this.root;
        while(runner){
            if(runner.val === val){
                return true;
            } else if (runner.val > val){
                runner = runner.left;
            } else {
                runner = runner.right;
            }
        }
        return false;
    }
    this.isBalanced = function(){
        height = function(node){
            if (!node) {
                return 0;
            }
            var left = this.height(node.left);
            var right = this.height(node.right);
            return Math.max(left, right)+1;
        }
        function helper(node){
            var left = height(node.left);
            var right = height(node.right);
            if(!(left-right>1)||(right-left>1)){
                return false;
            } else {
                return true;
            }
        }
        if(helper(this.root)){
            return false;
        }
        return true;
    }
}
var balanced = new BST();
var unbalanced = new BST();

balanced.add(5).add(3).add(10).add(1).add(4).add(7).add(12).add(13);
unbalanced.add(6).add(7).add(3).add(2).add(1).add(4);

console.log(balanced.isBalanced());
console.log(unbalanced.isBalanced());
