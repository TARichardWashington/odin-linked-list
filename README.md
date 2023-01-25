# Linked List 

Two clases are included:

### Class Node

Models a single node in the linked list

#### Properties

- getter `nextNode` returns the next node in the list
- setter `nextNode(node)` sets the next node in the list, defaults to null
- getter `value` returns the value of this node
- setter `value(value)` sets the value of this node

### Class LinkedList

Models an entire linked list

#### Properties

- getter `size` returns the number of nodes 
- getter `head` returns the first or head node
- getter `tail` returns the last or tail node

#### Methods

- `append(value)` creates a new node with a value and adds it as the tail
- `prepend(value)` creates a new node with a value and adds it as the head
- `at(index)` returns the node at this index if suc a node exists
- `pop` removes the last element from the list
- `contains(value)` returns true if value exists in any node, returns false if it does not
- `find(value)` seaches each node and returns the index of the first node containing it or false if it does not
- `insertAt(value, index)` inserts a new node with the value at position index
- `removeAt(index)` removes the node at position index
- `toString()` returns a well formatted string of the linked list and the values of its nodes

### Usage

```javascript
let myNewLinkedList = new LinkedList(5) // Creates a new linked list with a singe node

myNewLinkedList.append(5);
myNewLinkedList.prepend(23);

let myNewLinkedListSize = myNewLinkedList.size; // 1
let myNewLinkedListString = myNewLinkedList.toString(); // (23) -> (5) -> (5) -> null

```

