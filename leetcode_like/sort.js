/**
 * 冒泡排序
 * 相邻的数据比较
 */
function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
/**
 * 选择排序
 * 
 */
function swap(arr, index, min) {
    let temp = arr[index];
    arr[index] = arr[min];
    arr[min] = temp;
    return arr;
}
function selectionSort(arr) {
    let min;
    for (let i = 0; i < arr.length-1; i++) {
        min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j
            }
        }
        arr = swap(arr, i, min);
    }
    return arr;
}
module.exports = {
    bubbleSort,
    selectionSort
}