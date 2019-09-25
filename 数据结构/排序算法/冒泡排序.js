/**
 * 
 *
 * 时间复杂度为O(n^2)
 * 通过一趟排序可以把最大的元素冒泡到最末尾的位置
 * 比较相邻的两个元素,前一个若比后一个大,则交换位置
 */
function bubble(arr) {
    //遍历数组 len 次,以确保数组被完全排序
    for (let i = 0, len = arr.length; i < len; i++) {//循环每一个数字
        //遍历数组的 len-i 项,忽略后面的第i项(已排序部分)
        for (let j = 0; j < len - i - 1; j++) {//对 len-i 的数字交换位置
            if (arr[j] > arr[j + 1]) {
                // let temp
                // temp = arr[i]
                // arr[i] = arr[i + 1]
                // arr[i + 1] = temp
                //交换值,解构赋值的形式
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }

    }
    return arr
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(bubble(arr))