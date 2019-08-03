//哈希函数的实现
function hashFunc(str, size) {
    /**
     *   1.将字符串转化为比较大的数字:hashCode
     *   2.将hashCode压缩到数字范围之内
     *   参数:str要转换的字符串,size数组大小
     *   使用unicode编码
     */
    let hashCode = 0;
    for (let i = 0; i < str.length; i++) {
        //将字符为hashcode,37为质数,可以让元素分布更均匀
        hashCode = 37 * hashCode + str.charCodeAt(i);
        console.log(hashCode);
    }
    //取模操作,压缩hashcode,得到索引值
    let index = hashCode % size

    return index;
}
console.log(hashFunc('abc',7))
console.log(hashFunc('bbc',7))

