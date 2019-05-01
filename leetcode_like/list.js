/** 
 * 列表
 * 
 */
function print(ele){
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

}

module.exports = List;