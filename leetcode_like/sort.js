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
    for (let i = 0; i < arr.length - 1; i++) {
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

/**
 * shell排序
 */

function shellsort(arr) {
    var N = arr.length;
    var h = 1;
    while (h < N / 3) {
        h = 3 * h + 1;
    }
    while (h >= 1) {
        for (var i = h; i < N; i++) {
            for (var j = i; j >= h && arr[j] < arr[j - h];
                j -= h) {
                swap(arr, j, j - h);
            }
        }
        h = (h - 1) / 3;
    }
    return arr;
}

/**
 * 快速排序
 */
function quickSort(arr) {
    if (arr.length === 0) {
        return [];
    }
    var pivot = arr[0];
    var left = [];
    var right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
    }
    return quickSort(left).concat(pivot, quickSort(right))
}

module.exports = {
    bubbleSort,
    selectionSort,
    shellsort,
    quickSort
}