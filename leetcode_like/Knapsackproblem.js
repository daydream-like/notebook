/**
 * 背包对象
 * W: 背包最大容量
 *
 */
function Backpack(W) {  // 背包的容量
    this.W = W  // 当前加入背包中的物品总重量
    this.cW = 0
    // 当前加入背包中物品的总收益
    this.cV = 0
    // 当前的最优解数组
    this.X = []  // 当前的最优收益
    this.V = 0
    // 当前物品重量数组
    this.wArray = []  // 当前物品收益数组
    this.vArray = []  // 待选取的物品数量
    this.n = 0
}
/**
   * 遍历物品
   * 
   * index: 当前序号
   * xt: 当前的遍历情况
   */
Backpack.prototype.traverseGoods = function (index, xt) {  // 如果已经遍历到最后
    if (index >= this.n) {
        if (this.V < this.cV) {
            for (var i = 0; i < this.n; i++) {
                this.X[i] = xt[i]
            } this.V = this.cV
        } return
    }  // 当前物品加入后未超出背包容量时
    // 需要将当前物品加入背包后继续向后遍历
    if (this.cW + this.wArray[index] <= this.W) {    // 将当前物品加入背包
        xt[index] = 1
        this.cW += this.wArray[index]
        this.cV += this.vArray[index]    // 向后继续遍历
        this.traverseGoods(index + 1, xt)
        this.cW -= this.wArray[index]
        this.cV -= this.vArray[index]
    }  // 回溯时将当前物品不加入背包遍历后续物品
    xt[index] = 0
    this.traverseGoods(index + 1, xt)

}
/**
   * 计算最优组合
   * 
   * goodArr: 物品序列
   *
   */
Backpack.prototype.getBestFormGoodArray = function (goodArr) {  // 物品序列长度
    this.n = goodArr[0].length
    if (this.n <= 0) return
    this.wArray = goodArr[0]
    this.vArray = goodArr[1]
    var xt = []
    this.traverseGoods(0, xt)
    return {
        X: this.X, V: this.V
    }
}
var backpack = new Backpack(10)
var goodArr = [
    [2, 5, 4, 2],
    [6, 3, 5, 4]
]
backpack.getBestFormGoodArray(goodArr)

