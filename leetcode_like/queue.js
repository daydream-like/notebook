/**
 * 队列（先进先出）
 * 在队尾插入元素，在队首删除元素，用于存储按顺序排列的元素
 * 
 */
class Queue {
    constructor() {
        this.dataStore = [];
    }
    enqueue(element) {
        //向队尾添加元素
        this.dataStore.push(element)
    }
    dequeue() {
        //删除队首元素
        this.dataStore.shift();
    }
    front() {
        // 队首
        this.dataStore[0];
    }
    back() {
        this.dataStore[this.dataStore.length - 1]
    }
    empty() {
        if (this.dataStore.length === 0) {
            return true;
        }
        return false;
    }
    toString() {
        let retStr = "";
        for (var i = 0; i < this.dataStore.length; ++i) {
            retStr += this.dataStore[i] + "\n";
        }
        return retStr;
    }
}


module.exports = Queue;