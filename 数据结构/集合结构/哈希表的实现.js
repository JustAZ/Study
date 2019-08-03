/**
 * 哈希表的封装
 */
function HashTable() {
    /**
     * 属性:
     *     @param storage:定义数组,基于数组实现哈希表
     *     @param count:记录当前哈希表已经存在多少数据,后面需要根据count来对数组进行扩容或缩容
     *     @param limit:用于标记数组中一共可以存放多少元素
     */
    this.storage = [];
    this.count = 0;
    this.limit = 7;

    //哈希函数,哈希化字符串获得对应的索引值
    HashTable.prototype.hashFunc = function (str, size) {
        let hashCode = 0;
        for (let i = 0; i < str.length; i++) {
            //将字符为hashcode,37为质数,可以让元素分布更均匀
            //使用unicode编码
            hashCode = 37 * hashCode + str.charCodeAt(i);
            // console.log(hashCode);
        }
        //取模操作,压缩hashcode,得到索引值
        let index = hashCode % size

        return index;
    }

    /**
     * 添加和修改操作思路
     * 1.根据key获得对应的索引值
     *      目的是找的插入或修改的位置
     * 2.根据索引值,取出bucket
     *      如果bucket不存在的话,就创建bucket,并放置在该索引的位置中
     * 3.判断是插入数据,还是修改数据
     *      如果该位置有值,则修改它
     *      如果没有则插入
     * 4.添加数据   
     */
    HashTable.prototype.put = function (key, value) {
        //1.根据key获得索引值
        let index = this.hashFunc(key, this.limit);
        //2.找到bucket
        let bucket = this.storage[index];
        //3.判断bucket是否存在,若不存在则创建,并放置在该索引下
        if (bucket == null) {
            bucket = [];
            this.storage[index] = bucket;
        }
        //4.拿到bucket后,判断key是否存在,若存在,则修改值,不存在则添加值
        //数据结构是这样的[[[key,value],[key,value]],[],[]] --三层
        // 数组中放置数据的方式: [[ [k,v], [k,v], [k,v] ] , [ [k,v], [k,v] ]  [ [k,v] ] ]

        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i];
            if (tuple[0] === key) {
                //更新值
                tuple[1] = value;
                return;
            }
        }
        // 添加值
        bucket.push([key, value])
        this.count++;

        //判断是否需要扩容
        if (this.count > this.limit * 0.75) {
            let newSize = this.limit * 2;
            let newPrime = this.getPrime(newSize)
            this.resize(newPrime)
        }
    }
    /**
     * 获取元素方法
     * 1.根据key获得对应的索引
     * 2.根据索引找到bucket,判断bucket是否为null,若为null直接返回null;
     * 3.线性查找bucket中的key是否等于传入的keys
     */
    HashTable.prototype.getValue = function (key) {
        let index = this.hashFunc(key, this.limit);

        let bucket = this.storage[index];
        if (bucket == null) {
            return null;
        }
        //若bucket不为null;
        for (let index = 0; index < bucket.length; index++) {
            let tuble = bucket[index];
            if (tuble[0] === key) {
                return tuble[1];
            }
        }
        //没有找到
        return null;

    }
    /**
     * 
     * 删除操作 
     */
    HashTable.prototype.delete = function (key) {
        let index = this.hashFunc(key, this.limit);

        let bucket = this.storage[index];
        if (bucket == null) {
            return null;
        }
        //若bucket不为null;F
        for (let i = 0; i <= bucket.length; i++) {
            let tuble = bucket[i];
            if (tuble[0] === key) {
                bucket.splice(i, 1);
                this.count--;
                return tuble[1]
                //缩小容量
                if (this.limit > 7 && this.count < this.limit * 0.25) {
                    let newSize = Math.floor(this.limit / 2);
                    let newPrime = this.getPrime(newSize);
                    this.resize(newPrime);
                }
            }
        }
        //找不到
        return null;
    }
    //判读是否为空
    HashTable.prototype.isEmpty = function () {
        return this.count === 0;
    }
    //获取哈希表元素的个数
    HashTable.prototype.size = function () {
        return this.count;
    }
    //数组扩容或缩容,当添加元素时添加到一定程度或删除元素删到一定元素程度时,调用
    /**
     * 
     * 1.oldStorage保存着旧数组的引用
     * 2.重置所有属性
     * 3.迁移bucket及bucket下的元组
     */
    HashTable.prototype.resize = function (newLimit) {
        //保存旧的数组大小
        let oldStorage = this.storage;

        //重置所有属性
        this.storage = [];
        this.count = 0;
        this.limit = newLimit;

        for (let i = 0; i < oldStorage.length; i++) {
            //取出bucket
            let bucket = oldStorage[i];
            if (bucket === null) {
                //若bucket是,则跳出当前循环
                continue;
            }
            //取出元数组
            for (let j = 0; j < bucket.length; j++) {
                let tuble = bucket[j];
                //添加到storage
                this.put(tuble[0], tuble[1]);

            }

        }
    }
    //使哈希表扩容后容量恒为质数
    //1.判断是否为质数
    HashTable.prototype.isPrimeFast = function (num) {
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
    ///2.根据扩容后的数,得到最近的一个质数
    HashTable.prototype.getPrime = function (num) {

        //不确定循环次数的情况下,使用while
        while (!isPrimeFast(num)) {
            num++
        }
        return num;
    }
}

//测试
let hT = new HashTable();
hT.put('abc', '123');
hT.put('cba', '321');
hT.put('nba', '521');
hT.put('mba', '520');
console.log(hT.getValue('abc'));

//修改
hT.put('abc', '111');
console.log(hT.getValue('abc'))
hT.put('cba', '123');
console.log(hT.getValue('cba'))

//删除
hT.delete('abc');
console.log(hT.getValue('abc'))
