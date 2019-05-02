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
        return this.dataStore.shift();
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

/**
 * 实际运用
 * 方块舞的舞伴分配问题
 * 下面我们使用队列来模拟跳方块舞的人。
 * 当 男男女女来到舞池，他们按照自己的性别排成两队。
 * 当舞池中有地方空出来时，选两个队列中的第一个人组成舞伴。
 * 他们身后的人各自向前移动一位，变成新的队首。
 * 当一对舞伴 迈入舞池时，主持人会大声喊出他们的名字。
 * 当一对舞伴走出舞池，且两排队伍中有任意 一队没人时，主持人也会把这个情况告诉大家。
 */
const dancers = [{ name: 'like', sex: 'M' }, { name: 'like2', sex: 'M' }, { name: 'like3', sex: 'F' }, { name: 'like4', sex: 'F' }, { name: 'like5', sex: 'F' }, { name: 'like6', sex: 'F' }, { name: 'like7', sex: 'M' }]
let femaleDancers = new Queue();
let maleDancers = new Queue();

class Dancer {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    getDancers() {
        dancers.forEach(item => {
            if (item.sex === 'F') {
                femaleDancers.enqueue(item)
            } else {
                maleDancers.enqueue(item)
            }
        })
    }
    beginDance() {
        while (!femaleDancers.empty() && !maleDancers.empty()) {
            let p = femaleDancers.dequeue();
            console.log('f出队', p.name)
            let p2 = maleDancers.dequeue();
            console.log('f2出队', p2.name)
        }
    }
}
let d = new Dancer();
d.getDancers();
d.beginDance();

module.exports = {
    Queue,
    Dancer
};