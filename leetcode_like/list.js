/** 
 * 
 * 
 列表就是一组有序的数据。每一个列表项称为元素，这个元素可以是任意数据类型。列表没有对保存元素个数做限制，也就是说会受限于内存。
 书中有关于列表的抽象数据类型的定义，大概如下：
listSize：属性，列表中元素个数

pos：属性，列表当前位置

length：方法（书中是属性，有错），返回列表中元素个数

clear：方法，清空列表中所有元素

toString：方法，返回列表的字符串形式

getElement：方法，返回当前位置元素

find：方法，查找元素在列表中位置

contains：方法，判断元素是否在列表中

insert：方法，在现有元素后插入新元素

append：方法，在列表末尾添加新元素

remove：方法，在列表中删除元素

front：方法，将列表的当前位置移动到第一个位置

end：方法，将列表的当前位置移动到最后一个位置

prev：方法，将当前位置前移一位

next：方法，将当前位置后移一位

currPos：方法，返回列表当前位置

moveTo：方法，将当前位置移动到指定位置
 */
function print(ele) {
    console.log(ele)
}

class List {
    constructor() {
        this.listSize = 0;
        this.pos = 0;
        this.dataStore = [];

    }
    append(ele) {
        this.dataStore[this.listSize++] = ele
        return this.dataStore;
    }
    find(ele) {
        for (let i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i] === ele) {
                return i;
            }
        }
        return -1;
    }

    remove(ele) {
        let findAt = this.find(ele);
        if (findAt > -1) {
            this.dataStore.splice(findAt, 1);
            this.listSize--;
            return true;
        }
        return false;
    }
    length() {
        return this.listSize;
    }
    toString() {
        return this.dataStore;
    }
    insert(ele, after) {
        let insertPos = this.find(after);
        if (insertPos > -1) {
            this.dataStore.splice(insertPos, 0, ele);
            this.listSize++;
            return true;
        }
        return false;
    }
    clean() {
        this.dataStore = [];
        this.listSize = 0;
        this.pos = 0;
    }

}
module.exports = List;