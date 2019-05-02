class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.previous = null; //双向链表
    }
}
/**
 * 链表分为 普调 双向 循环链表
 */
class Link {
    constructor() {
        this.header = new Node('head');
    }
    find(element) {
        let currentNode = this.header;
        while (currentNode.element !== element) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    insert(newElement, element) {//在已知节点后面插入元素
        let newNode = new Node(newElement);
        let currentNode = this.find(element);
        newNode.next = currentNode.next;
        newNode.previous = currentNode;
        currentNode.next = newNode;
    }
    // 找到前一个节点
    findPrevious(element) {
        let currentNode = this.header;
        while (currentNode.next !== null && currentNode.next.element !== element) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    remove(element) {
        let currentNode = this.find(element)
        if (currentNode.next !== null) {
            currentNode.previous.next = currentNode.next;
            currentNode.next.previous = currentNode.previous;
            currentNode.next = null;
            currentNode.previous = null;
        }
    }
    findLast() {
        let currentNode = this.header;
        while (currentNod && currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    display() {
        let current = this.header;
        while (current.next !== null) {
            current = current.next;
        }
    }
}