/**
 * 顺序查找
 */

function searchData(arr, data) {
    arr.forEach(element => {
        if (element === data) {
            return true;
        }
    });
    return false;
}

/***
 * 查找最大值
 */

function findMin(arr) {
    let min = 0;
    arr.forEach((item, index) => {
        if (item < arr[min]) {
            min = index
        }
    })
    return min;
}

/**
 * 查找最小值
 */
function findMax(arr) {
    let max = 0;
    arr.forEach((item, index) => {
        if (item > arr[max]) {
            max = index
        }
    })
    return max;
}

/**
 * 二分查找
 */

function binSearch(arr, data) {
    let upperBound = arr.length - 1;
    let lowerBound = 0;
    while (lowerBound <= upperBound) {
        let mid = Math.floor((upperBound + lowerBound) / 2);
        if (arr[mid] < data) {
            lowerBound = mid + 1;
        }
        else if (arr[mid] > data) {
            upperBound = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}
module.exports = {
    binSearch
}