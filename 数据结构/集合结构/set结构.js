function Set() {
    //属性
    this.items = {};

    Set.prototype.add = function (value) {
        //添加方法

        if (this.has(value)) { return false };

        this.items.value = value;
        return ture;
    }
    Set.prototype.has = function (value) {
        //判断item对象是否有,value这个属性
        return this.item.hasOwnProperty(value);
    }
    Set.prototype.remove = function (value) {
        //移除方法
        if (!this.has(value)) {
            return false;
        }
        //删除元素
        delete this.items[value]
        return true;
    }
    Set.prototype.clear = function () {
        //清空
        this.item = {}
    }
    Set.prototype.size = function () {
        return Object.keys(this.item).length;
    }
    //获取所有值
    Set.prototype.value = function () {
        //返回所有key
        return Object.keys(this.item);
    }

    /**
     * 集合间的操作
     */
    Set.prototype.union = function (otherSet) {
        //并集
        let unionSet = new Set();

        let values = this.value();
        for (let i; i < values.length; i++) {
            unionSet.add(values[i]);
        }
        values = otherSet.value();
        for (let i; i < values.length; i++) {
            unionSet.add(values[i]);
        }
        return unionSet;
    }
    Set.prototype.intersection = function (otherSet) {
        //交集
        let intersection = new Set();

        let value = this.value();
        for (let i; i < value.length; i++) {
            let item = value[i];
            if (otherSet.has(item)) {
                otherSet.add(item);
            }
            return intersection;
        }
    }
    Set.prototype.chaJi = function (otherSet) {
        //差集
        let chaJi = new Set();
        let value = this.value();        
        for (let i; i < value.length; i++) {
            let item = value[i];
            if (!otherSet.has(item)) {
                otherSet.add(item);
            }
            return chaJi;
        }
    }
    Set.prototype.son = function (otherSet) {
        //子集
        let value = this.value();
        for (let i; i < value.length; i++){
            let item = value[i];
            if(!otherSet.has(item)){
                return false;
            }
            return true;
        }
    }
}