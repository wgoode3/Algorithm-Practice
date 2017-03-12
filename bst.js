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
}

var maple = new BST();
maple.add(5).add(3).add(1).add(6).add(9).add(-2).add(0).add(345);
console.log(maple);
console.log(maple.height());
console.log(maple.height2(maple.root));
console.log(maple.contains(2));
console.log(maple.contains(345));

