
/**
 * 
 *  普通封装法 
 *  质数只能被 1和自身整除,则 判断2到num之间是否有可以被 num 整除的数
 */
function isPerme(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

/**
 * 高效判断
 * 既然质数只有0和自身才可以整除
 * 当一个数不是质数时,它的因数会有两个,一个会小于 Sqrt(num),另一个会大于.
 * 所以只需判断其中一部分,即小于Sqrt(num)的部分,或大于它的部分.若小于sqrt(num),有元素可以被num整除,则说明不是质数.
 */
function isPermeFast(num) {
    //获得num的平方根
    let temp = parseInt(Math.sqrt(num))

    //2.循环判断
    for (let i = 2; i < temp; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPerme(2))
console.log(isPermeFast(3))
