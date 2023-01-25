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
            throw new RangeError(
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

    insertAt(value, index) {
        if (index > this.size) {
            throw new RangeError(`Can't add node at index ${index}, linked list is only ${this.size} nodes long`);
        }

        if (index === this.size) { // Tail so just append it
            this.append(value);
            return;
        }

        if (index === 0) { // Head so 
            this.prepend(value);
            return;
        }

        // Insert a new node
        // repointing the previous node to it
        // pointing the new node to the rest of the list
        let nodeToInsert = new Node(value);
        let currentNode = this.at(index);
        let previousNode = this.at(index - 1);

        previousNode.nextNode = nodeToInsert;
        nodeToInsert.nextNode = currentNode;
    }
    removeAt(index) {
        if (index >= this.size) {
            throw new RangeError(`Can't remove node at index ${index}, linked list is only ${this.size} nodes long`);
        }

        if (index === (this.size - 1)) { // Tail so just remove it
            this.pop();
            return;
        }

        if (index === 0) { // Head so make the next item the head
            this._head = this.at(1);
            return;
        }

        // Remove node at index
        // repointing the previous node to the next node
        let nodeToRemove = this.at(index);
        let nextNode = this.at(index + 1);
        let previousNode = this.at(index - 1);

        previousNode.nextNode = nextNode;
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