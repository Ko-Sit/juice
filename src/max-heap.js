const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null
		this.parentNodes = []
		this.length = 0
		this.flag = true
	}

	push(data, priority) {
		var node = new Node(data, priority)
		this.insertNode(node)
		this.shiftNodeUp(node)
		this.length += 1
	}

	pop() {
		if (this.length != 0) {
			this.length -= 1

			var root = this.detachRoot()
			this.restoreRootFromLastInsertedNode(root)    //hz che delat'
			this.shiftNodeDown(this.root)
			//console.log(this.root.data)
			return root.data  // or this.root.data
		}
	}

	detachRoot() {
		var root = this.root
		this.root = null
		return root
	}

	restoreRootFromLastInsertedNode(detached) {
		var temp =  this.parentNodes[0] // или pop()
		//console.log(temp.data)
		this.root = temp	//detached = null
		//this.root.left.parent = this.root
		//this.root.right.parent = this.root
	}

	size() {
		return this.length
	}

	isEmpty() {
		return this.parentNodes.length == 0

	}

	clear() {
		this.root = null
		this.parentNodes = []
		this.length = 0
	}

	insertNode(node) {
		this.parentNodes.push(node)
		if(this.parentNodes.length == 1) {
			this.root = node
		}
		else{
			var last = this.root
			while(last != null){
				if(last.left != null && last.right == null) {
					last.right = node
					// node.parent = node  //hz
					break
				}
				else if(last.left == null) {
					last.left = node
					// node.parent = node  //hz
					break
				}
				// if(last.left.data > node.data)
				// 	last = last.right
				else {
					last = last.left
				}
			}
		}

		if (this.flag && this.parentNodes.length != 1) {
			this.parentNodes.shift()

		}
		this.flag = !this.flag
		// подгонка this.parentnodes ^
	}

	shiftNodeUp(node) {
		// while(node.parent != null) {
		// 	if(node.parent.data < node.data) {
		// 		node.swapWithParent()
		// 	}
		// 	else
		// 		node = node.parent
		// }
		this.root = node
		if(node.parent == null)
			return node
		if(node.parent.data < node.data)
			node.swapWithParent()
		return this.shiftNodeUp(node)
		// var i = 0
		// while(i < this.parentNodes.length - 1) {
		// 	if (this.parentNodes[i].priority > this.parentNodes[i + 1].priority) {
		// 		var temp = this.parentNodes[i]
		// 		this.parentNodes[i]	= this.parentNodes[i + 1]
		// 		this.parentNodes[i + 1] = temp
		// 	}
		// 	i += 1
		// }
	}

	shiftNodeDown(node) {
		while(!(node.right == null || node.right == null)){
			if(node.left.data > node.data) {
				node.left.swapWithParent()
				node = node.left
			}
			else if(node.right.data > node.data) {
				node.right.swapWithParent()
				node = node.right
			}
			else{
				node = node.right  //h
			}
		}

	}
}

module.exports = MaxHeap;
// const h = new MaxHeap();
// console.log(h.size() == 0)
//
// h.push(15, 42);
// h.push(13, 0);
// console.log(h.size() == 2)
//
// h.push(14, 100);
// console.log(h.size() == 3)
// h.pop();
// h.pop();
// console.log(h.size() == 1)
//
// h.clear();
// console.log(h.size() == 0)

// shiftNodeDown not workin:

// const h = new MaxHeap();
// h.push(42, 15);
// h.push(15, 14);
// h.push(0, 16);
// h.push(100, 100);
//
// h.pop()
// h.pop()
// h.pop()
// h.pop()
// h = new MaxHeap();
// h.root = new Node(0, 10);
// h.root.appendChild(new Node(1, 5));
// h.root.appendChild(new Node(2, 7));
// h.root.left.appendChild(new Node(3, 20));

// let h;
// h = new MaxHeap();
// h.push(42, 15);
// h.push(14, 32);
// h.push(0, 0);
//
// const root = h.root;
// const left = h.root.left;
// const lastInsertedNode = h.root.right;
//
// const detached = h.detachRoot();
// h.restoreRootFromLastInsertedNode(detached);
//
// //expect(h.parentNodes.indexOf(root)).to.equal(-1);
// console.log(lastInsertedNode)
// expect(h.parentNodes[1]).to.equal(left);

// let h = new MaxHeap()
// const nodes = [
// 	new Node(0, 0),
// 	new Node(1, 1),
// 	new Node(2, 2),
// 	new Node(3, 3),
// 	new Node(4, 4),
// 	new Node(5, 5),
// 	new Node(6, 6),
// ];
// h.insertNode(nodes[0]);
// console.log(h.parentNodes[0].data == nodes[0].data)
// h.insertNode(nodes[1]);
// console.log(h.parentNodes[0].data  == nodes[0].data)
// console.log(h.parentNodes[1].data  == nodes[1].data)
// h.insertNode(nodes[2]);
// console.log(h.parentNodes[0].data == nodes[1].data)
// console.log(h.parentNodes[1].data == nodes[2].data)
// h.insertNode(nodes[3]);
// console.log(h.parentNodes[0].data == nodes[1].data)
// console.log(h.parentNodes[1].data == nodes[2].data)
// console.log(h.parentNodes[2].data == nodes[3].data)
// h.insertNode(nodes[4]);
// console.log(h.parentNodes[0].data == nodes[2].data)
// console.log(h.parentNodes[1].data == nodes[3].data)
// console.log(h.parentNodes[2].data == nodes[4].data)
// h.insertNode(nodes[5]);
// console.log(h.parentNodes[0].data == nodes[2].data)
// console.log(h.parentNodes[1].data == nodes[3].data)
// console.log(h.parentNodes[2].data == nodes[4].data)
// console.log(h.parentNodes[3].data == nodes[5].data)
// h.insertNode(nodes[6]);
// console.log(h.parentNodes[0].data == nodes[3].data)
// console.log(h.parentNodes[1].data == nodes[4].data)
// console.log(h.parentNodes[2].data == nodes[5].data)
// console.log(h.parentNodes[3].data == nodes[6].data)
// h = new MaxHeap();
//
// h.root = new Node(0, 10);
// h.root.appendChild(new Node(1, 5));
// h.root.appendChild(new Node(2, 7));
// h.root.left.appendChild(new Node(3, 20));
//
// /**
//  10                       20
//  /  \                     /  \
//  5    7  - shift up ->   10   7
//  /                        /
//  20                       5
//  **/
//
// h.parentNodes = [
// 	h.root.left,
// 	h.root.right,
// 	h.root.left.left,
// ];
//
// const correctParentNodesOrderAfterShiftUp = [
// 	h.root,
// 	h.root.right,
// 	h.root.left
// ]
//
// h.shiftNodeUp(h.root.left.left);
//
// console.log(h.parentNodes[0] == correctParentNodesOrderAfterShiftUp[0])
// console.log(h.parentNodes[1] == correctParentNodesOrderAfterShiftUp[1])
// console.log(h.parentNodes[2] == correctParentNodesOrderAfterShiftUp[2])
// h = new MaxHeap();
//
// h.push(42, 15);
// h.push(14, 32);
// h.push(0, 0);
//
// const lastInsertedNode = h.root.right;
// const left = h.root.left;
//
// const detached = h.detachRoot();
// h.restoreRootFromLastInsertedNode(detached);
//
// console.log(h.root == lastInsertedNode)
// console.log(h.root.left == left)
// console.log(left.parent == lastInsertedNode)
//
