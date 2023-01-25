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
//console.log(node1.value);
node1.value = 2;
//console.log(node1.value);
node2 = new Node(5, node1);
//console.log(node2.value);
//console.log(node2.nextNode.value);

class LinkedList {
    constructor(value) {
        let head = new Node(value); // No nextNode needed as is also the tail at this point!
        this._head = head;
    }

    append(value) {
        let newTail = new Node(value);
        let currentTail = this.tail;
        currentTail.nextNode = newTail;
    }

    prepend(value) {
        let newHead = new Node(value, this._head);
        this._head = newHead;
    }

    get size() {
        let count = 0;

        let currentNode = this._head;

        while (currentNode) {
            count++;
            currentNode = currentNode.nextNode;
        }

        return count;
    }

    get head() {
        return this._head;
    }

    get tail() {
        let theTail = this._head;

        while (theTail.nextNode) {
            theTail = theTail.nextNode;
        }

        return theTail;
    }

    at(position) {
        if (position >= this.size) {
            throw new Error(
                `Attempted to access a node that does not exist within this linked list.  
            There are a total of ${this.size} nodes.`);
        }

        let nodeToReturn = this._head;

        for (let i = 0; i < position; i++) {
            nodeToReturn = nodeToReturn.nextNode;
        }

        return nodeToReturn;
    }

    pop() {
        let size = this.size; // e.g. 5 elements
        let newTail = this.at(size - 2); // Second to last element
        newTail.nextNode = null; // Detech the last element
    }

    contains(value) {
        let isValueContained = false;

        let currentNode = this._head;

        while (currentNode) {
            if (currentNode.value === value) {
                isValueContained = true;
                break;
            }

            currentNode = currentNode.nextNode;
        }

        return isValueContained;
    }

    find(value) {
        let nodeToReturn = false;

        let currentNode = this._head;

        while (currentNode) {
            if (currentNode.value === value) {
                nodeToReturn = currentNode;
                break;
            }

            currentNode = currentNode.nextNode;
        }

        return nodeToReturn;
    }

    toString() {
        let string = '';
        let number = 0;
        let currentNode = this._head;

        while (currentNode) {
            string += `(${currentNode.value}) -> `;
            number++;
            currentNode = currentNode.nextNode;
        }

        string += 'null';

        return string;
    }
}

var ll1 = new LinkedList(15);

//console.log(ll1.head.value);
//console.log(ll1.tail.value);

ll1.prepend(100);

//console.log(ll1.tail.value);
//console.log(ll1.head.value);

ll1.append(35);

console.log(ll1.tail.value);
console.log(ll1.head.value);

console.log(ll1.toString());

console.log(ll1.size);

console.log(ll1.at(2).value);

console.log(ll1.contains(23));
console.log(ll1.contains(15));

console.log(ll1.find(15).value);

ll1.pop();

console.log(ll1.toString());

ll1.pop();

console.log(ll1.toString());

