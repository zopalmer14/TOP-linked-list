
class LinkedList {
    constructor() {
        this.listHead = null
        this.length = 0;
    }

    // adds a new node containing value to the end of the list 
    // or start if list is empty
    append(value) {
        if (this.listHead === null) {
            prepend(value);
        } else {
            // iterate over the list until we reach the last node
            let curr = this.listHead;
            while (curr.nextNode !== null) {
                curr = curr.nextNode;
            }

            // add a new node to the end
            curr.nextNode = new Node(value);
        }

        // increment the length
        this.length++;
    }

    // adds a new node containing value to the start of the list
    prepend(value) {
        // create a new node with the value
        const newNode = new Node(value);

        // if the list isn't empty ...
        // set the current listHead as the nextNode for the new
        if (this.listHead !== null) {
            newNode.nextNode = this.listHead;
        }

        // make the newNode the head of the list
        this.listHead = newNode;

        // increment the length
        this.length++;
    }

    // returns the total number of nodes in the list
    size() {
        return this.length;
    }

    // returns the first node in the list
    head() {
        return this.listHead;
    }

    // returns the last node in the list
    tail() {
        // check if list is empty
        if (this.listHead === null) {
            return 'Error: list is empty';
        }

        let curr = this.listHead;
        while (curr.nextNode !== null) {
            curr = curr.nextNode;
        }

        return curr;
    }

    // returns the node at the given index
    at(index) {
        // check to make sure the index is within bounds
        if (index < 0 || index > this.length - 1) {
            return 'Error: index out of bounds';
        }

        // iterate to the appropriate node and return it
        let curr = this.listHead;
        for (let i = 0; i < index; i++) {
            curr = curr.nextNode;
        }

        return curr;
    }

    // removes the last element from the list and returns it
    pop() {
        // check if list is empty
        if (this.listHead === null) {
            return 'Error: list is empty';
        }

        // if there is only one item - set head to null and return the old head
        let curr = this.listHead;
        if (this.length === 1) {
            this.listHead = null;
            return curr;
        }

        // otherwise - iterate to the last node
        let prev = null;
        while (curr.nextNode !== null) {
            prev = curr;
            curr = curr.nextNode;
        }

        // remove the last node from the list
        // (prev -> curr) -> (prev -> null)
        prev.nextNode = null;

        // decrement the length
        this.length--;

        return curr;
    }

    // returns true if the passed in value is in the list and false otherwise
    contains(value) {
        // check if list is empty
        if (this.listHead === null) {
            return false;
        }

        // iterate over the list to search for the value
        let curr = this.listHead;
        while (curr.nextNode !== null) {
            if (curr.value === value) {
                return true;
            }
            curr = curr.nextNode;
        }

        // finally, check the tail value as well
        return curr.value === value ? true : false;
    }

    // returns the index of the node containing value, or null if not found
    find(value) {
        // check if list is empty
        if (this.listHead === null) {
            return null;
        }

        // iterate over the list to search for the value
        let curr = this.listHead;
        let index = 0;
        while (curr.nextNode !== null) {
            if (curr.value === value) {
                return index;
            }
            curr = curr.nextNode;
            index++;
        }

        // finally, check the tail value as well
        return curr.value === value ? index : null;
    }

    // returns a String representation of the linked list
    toString() {
        // check if list is empty
        if (this.listHead === null) {
            return 'null';
        }

        // iterate over the list and add each node's value to the result string
        let result = '';
        let curr = this.listHead;
        while (curr.nextNode !== null) {
            result += `( ${curr.value} ) -> `;
            curr = curr.nextNode;
        }

        // add the 'null' to the end
        result += 'null';
        
        return result;
    }

    // inserts a new node with the provided value at the given index
    insertAt(value, index) {
        // check to make sure the index is within bounds
        if (index < 0 || index > this.length - 1) {
            return 'Error: index out of bounds';
        }

        // iterate to the given node
        let curr = this.listHead;
        let prev = null;
        for (let i = 0; i < index; i++) {
            prev = curr;
            curr = curr.nextNode;
        }

        // create the newNode
        const newNode = new Node(value);

        // add the node to the list - set prev.next to newNode and newNode.next to curr
        // (prev -> curr) -> (prev -> newNode -> curr)
        prev.nextNode = newNode;
        newNode.next = curr;

        // increment the length
        this.length++;
    }

    // removes the node at the given index
    removeAt(index) {
        // check to make sure the index is within bounds
        if (index < 0 || index > this.length - 1) {
            return 'Error: index out of bounds';
        }

        // iterate to the given node
        let curr = this.listHead;
        let prev = null;
        for (let i = 0; i < index; i++) {
            prev = curr;
            curr = curr.nextNode;
        }

        // remove the node from the list - set prev.next to curr.next
        // (prev -> curr -> next) -> (prev -> next)
        prev.nextNode = curr.nextNode;

        // decrement the length
        this.length--;
    }
};