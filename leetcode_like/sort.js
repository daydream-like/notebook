/**
 * 冒泡排序
 * 相邻的数据比较
 */
function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i; j++) {
            if (arr[j] > arr[j + 1]) {
                console.log(arr[j],arr[j+1],arr)
                let temp  = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([1,2,5,3,4,90,12,32,121,111]))


module.exports = {
    bubbleSort
}