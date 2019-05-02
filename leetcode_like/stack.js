/**
 * stack
 * last in first out 后入先出
 * 方法
 * push进栈
 * pop出栈
 * peek返回栈顶
 * clear清楚栈内元素
 * length栈的个数
 * empty表示栈内是否有元素
 */

class Stack {
    constructor() {
        this.dataStore = [];
        this.top = 0;
    }
    push(element) {
        this.dataStore[this.top++] = element;
    }
    pop() {
        return this.dataStore[--this.top]
    }
    peek() {
        return this.dataStore[this.top - 1]
    }
    length() {
        return this.top;
    }
    clear() {
        this.top = 0;
    }

}

function isPalindrome(word) {
    let s = new Stack();
    for (let i = 0; i < word.length; i++) {
        s.push(word[i])
    }
    let rWord = '';
    while (s.length() > 0) {
        rWord += s.pop().trim();
    }
    if (word === rWord) {
        return true;
    }
    return false;
}
function fact(n) {
    var s = new Stack();
    while (n > 1) {
        s.push(n--);
    }
    var result = 1;
    while (s.length() > 0) {
        result *= s.pop();
    }
    return result;
}
module.exports = {
    isPalindrome,
    fact
};