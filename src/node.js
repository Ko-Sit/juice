class Node {
	constructor(data, priority) {
		this.data = data
		this.priority = priority
		this.parent = null
		this.left = null
		this.right = null
	}

	appendChild(node) {
		if(this.left == null) {
			this.left = node
			node.parent = this
		}
		else if(this.right == null) {
			this.right = node
			node.parent = this
		}
	}

	removeChild(node) {
		if(this.left == node) {
			this.left = null
			node.parent = null
		}
		else if(this.right == node){
			this.right = null
			node.parent = null
		}
		else{
			throw new Error()
		}
	}

	remove() {
		if (this.parent != null){
			this.parent.removeChild(this)

		}
	}

	swapWithParent() {
		if (this.parent != null){
			if(this.parent.right == this)
				this.parent.left.parent = this
            if(this.parent.left == this && this.parent.right != null)
                this.parent.right.parent = this

            var left = this.parent
            this.parent.left = this.left
            this.left = left
            var right = this.parent.right
            this.parent.right = this.right
            this.right = right

			var temp = this.parent.parent
			this.parent.parent = this
			this.parent = temp

            if(this.parent != null){
                if (this.parent.left == this.left)
                    this.parent.left = this
                else
                    this.parent.right = this
            }
		}
	}
}

module.exports = Node;


