class Node {
    constructor(value = null, nextNode = null) { // Null link means that this is the tail
        this._value = value;
        this._nextNode = nextNode;
    }

    // Getter and setter for the next node
    get nextNode() {
        return this._nextNode;
    }

    set nextNode(nextNode = null) {
        this._nextNode = nextNode;
    }

    // Getter and setter for value
    get value() {
        return this._value;
    }

    set value(value = null) {
        this._value = value;
    }
}

node1 = new Node(1);
console.log(node1.value);
node1.value = 2;
console.log(node1.value);
node2 = new Node(5, node1);
console.log(node2.value);
console.log(node2.nextNode.value);