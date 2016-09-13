const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize=30) {
		this.heap = new MaxHeap()
		this.maxSize = maxSize
	}

	push(data, priority) {
		if(this.maxSize == this.heap.length)
			throw new Error()
		this.heap.push(data, priority)
	}

	shift() {
		if(this.heap.length == 0)
			throw new Error()
		var temp = this.heap.pop()
		//this.heap.parentNodes.shift()  ne nada
		return temp

	}

	size() {
		return this.heap.length
	}

	isEmpty() {
		return this.heap.length == 0

	}
}

module.exports = PriorityQueue;
// const q = new PriorityQueue()
// q.push(0, 1);
// console.log(q.size() == 1)
// q.push(1, 2);
// console.log(q.size() == 2)
// q.push(2, 3);
// console.log(q.size() == 3)
// q.shift();
// q.shift();
// console.log(q.size() == 1)
// q.shift();
// console.log(q.size() == 0)

