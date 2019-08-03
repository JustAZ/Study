function LinkedList2() {
    //内部节点类
    function Node(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
    //属性
    //指向第一个元素
    this.head = null;
    //指向最后一个元素
    this.tail = null;
    this.length = 0;

    //方法
    //追加元素
    LinkedList2.prototype.append = function (data) {
        //1.创建节点
        let node = new Node(data);
        //2.判断插入链表是否为空
        //2.1若为空直接插入
        //2.2.若不为空,找到最后一个元素在插入
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            //1.遍历的方法实现
            // let current = this.head;
            // while (current.next) {
            //     current = current.next;
            // }
            // current.next = node
            // node.prev = current;
            // this.tail = current;
            //2.更简便的方法
            //2.1.将新节点指向最后一个元素
            node.prev = this.tail;
            //将最后一个元素的next指向node
            this.tail.next = node;
            //将tail指向最后一个元素
            this.tail = node;

        }
        this.length++
    }
    //toString()
    LinkedList2.prototype.toString = function () {
        let current = this.head;
        let listString = '';
        while (current) {
            listString += current.data + "<=>";
            current = current.next;
        }
        return listString;
    }
    //正序向后遍历
    LinkedList2.prototype.backwardString = function () {
        let current = this.head;
        let listString = '';
        while (current) {
            listString += current.data + "<=>";
            current = current.next;
        }
        return listString;
    }
    //反序向前遍历
    LinkedList2.prototype.forwardString = function () {
        let current = this.tail;
        let listString = '';
        while (current) {
            listString += current.data + "<=>";
            current = current.prev;
        }
        return listString;
    }
    //insert插入特定位置
    LinkedList2.prototype.insert = function (position, data) {
        if (position < 0 || position > this.length) return false;

        let node = new Node(data);
        if (position === 0) {
            this.head = node;
            this.tail = node;
        } else {
            //判断position是否为0;
            if (position === 0) {
                this.head.prev = node;
                node.next = this.head;
                this.head = node;
            }
            //判断position是否为最后位置
            else if (position === this.length) {
                this.tail.next = node
                node.prev = this.tail
                this.tail = node;
            } else {
                let index = 0;
                let current = this.head;
                while (index < position) {
                    index++;
                    current = current.next;
                }
                current.prev.next = node;
                node.prev = current.prev
                node.next = current;
                current.prev = node
            }
        }
        this.length++

    }
    //修改某个位置上的值
    LinkedList2.prototype.upadte = function (position, data) {
        if (position < 0 || position >= this.length) return false;

        let index = 0;
        let current = this.head;
        while (index < position) {
            index++;
            current = current.next;
        }
        current.data = data
    }
    LinkedList2.prototype.get = function (position) {
        //越界判断
        if (position < 0 || position >= this.length) return null;
        //若this.lenght/2 > position ,从前往后遍历
        //this.length/2<position,从后往前
        if (this.length / 2 > position) {
            let current = this.head;
            let index = 0;
            while (index < position) {
                current = current.next;
            }
            return current.data
        } else {
            let current = this.tail;
            let index = this.length - 1;
            while (index > position) {
                current = current.prev;
                index--
            }
            return current.data;
        }
    }
    //indexOf()
    LinkedList2.prototype.indexOf = function (data) {
        let index = 0;
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return index;
                // break;
            }
            current = current.next;
            index++;
        }
        return -1;
    }
    //删除特定位置的节点
    LinkedList2.prototype.removeAt = function (position) {
        //不严谨positon为0的情况
        let current = this.head;

        if (position < 0 || position >= this.length) return false;
        if (this.length === 1) {
            //当前链表只有一个节点
            this.head = null;
            this.tail = null;
        } else {
            if (position === 0) {
                //第一个节点
                this.head.next.prev = null;
                this.head = this.head.next;
            } else if (position === this.length - 1) {
                //最后一个节点
                current = this.tail//方便return数据
                this.tail.prev.next = null;
                this.tail = this.tail.prev
            } else {
                let index = 0;
                while (index < position) {
                    index++
                    current = current.next;
                }
                current.prev.next = current.next;
                current.next.prev = current.prev;
            }
        }
        this.length--
        return current.data;

    }
    //删除链表中的某一项
    LinkedList2.prototype.remove = function (data) {
        let position = this.indexOf(ele);

        return this.removeAt(position)
    }
    //isEmpty()
    LinkedList2.prototype.isEmpty = function () {
        return this.length === 0;
    }
    //size()
    LinkedList2.prototype.size = function () {
        return this.length;
    }
    LinkedList2.prototype.getHead = function(){
        return this.head.data
    }
    LinkedList2.prototype.getTail =function(){
        return this.tail.data;
    }
}
let ls2 = new LinkedList2()
ls2.append(2)
ls2.append(3)
ls2.append(4)
ls2.insert(1, 5)

console.log(ls2.indexOf(31))
console.log(ls2.toString())
ls2.removeAt(3)
// ls2.upadte(1, 4)
console.log(ls2.backwardString())
console.log(ls2.forwardString())
