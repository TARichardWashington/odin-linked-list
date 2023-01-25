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

    }

    pop() {

    }

    contains(value) {

    }

    find(value) {

    }

    toString() {
        let string = '';
        let number = 1;
        let currentNode = this._head;

        string = `This linked list is ${this.size} nodes long. \n\n`;

        while (currentNode) {
            string += 'Item ' + number + ': ' + currentNode.value + '\n';
            number++;
            currentNode = currentNode.nextNode;
        }

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



