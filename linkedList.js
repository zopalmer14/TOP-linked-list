
class LinkedList {
    constructor() {
        this.listHead = null
    }

    // adds a new node containing value to the end of the list 
    // or start if list is empty
    append(value) {
        if (this.listHead === null) {
            prepend(value);
        } else {
            // iterate over the list until we reach the last node
            let curr = this.listHead;
            while (curr.nextNode !== null) curr = curr.nextNode;

            // add a new node to the end
            curr.nextNode = new Node(value);
        }
    }

    // adds a new node containing value to the start of the list
    prepend(value) {
        // create a new node with the value
        const newNode = new Node(value);

        // if the list isn't empty ...
        // set the current listHead as the nextNode for the new
        if (this.listHead !== null) newNode.nextNode = this.listHead;
        this.listHead = newNode;
    }

    // returns the total number of nodes in the list
    size() {
        // iterate over the list and count the nodes
        let curr = this.listHead
        let count = 0;
        while (curr !== null) {
            count++;
            curr = this.listHead.nextNode;
        }

        return count;
    }

    // returns the first node in the list
    head() {
        return this.listHead;
    }

    // returns the last node in the list
    tail() {
        let curr = this.listHead;
        while (curr.nextNode !== null) curr = curr.nextNode;
        return curr;
    }
};