/**
 * 
 * 选定一个基准,将大于它的排放在右边,在小于它的排放在左边
 * 分而治之的概念
 */

function quickSort(arr) {
    if (arr.length <= 1) { return arr }
    let index = Math.floor(arr.length / 2)
    // let pivot = arr[index]
    let pivot = arr.splice(index, 1)[0]
    let left = [];
    let right = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(quickSort(arr))