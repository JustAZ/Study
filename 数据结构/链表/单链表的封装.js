function LinkedList() {
    // 内部节点类
    function Node(data) {
        this.data = data;
        // 节点默认指针为空
        this.next = null;
    }
    // 属性
    this.head = null;
    this.length = 0;

    //追加方法的实现
    LinkedList.prototype.append = function (ele) {
        //1.创建一个节点
        let node = new Node(ele);
        //2.判断链表是否为空,是否为第一个节点
        if (this.length === 0) {
            //2.1 若是第一个节点则直接将head指向节点
            this.head = node;
        } else {
            //2.2 若不是第一个指针,则需要找到最后一个节点
            //创建变量保存当前指针
            let current = this.head
            while (current.next) {
                //循环链表,若当前指向元素的next是否为空,则跳出循环
                //若不为空则指向下一个元素
                current = current.next
            }
            //此时的 current.next指向为空,是最后一个节点
            current.next = node
        }
        //追加了节点,则长度加1
        this.length++;
    }
    //toString方法
    LinkedList.prototype.toString = function () {
        let current = this.head;
        let listString = '';

        while (current) {
            listString += current.data + "=>"
            current = current.next
        }
        return listString;
    }
    //insert插入特定位置
    LinkedList.prototype.insert = function (position, ele) {
        //1.对position进行越界判断
        //1.2 position不能是负数,否则插入失败
        //2.2 position插入位置,不能大于长度
        if (position < 0 || position > this.length) return false;

        //创建node
        let node = new Node(ele);
        //2. 插入会由两种情况
        //2.1 positio为0,插入到第一个位置
        //2.2 position不为0,插入到任意位置
        if (position === 0) {
            //先将创建元素指向插入位置元素
            node.next = this.head;
            // 在将head指向下一个元素
            this.head = node;
        } else {
            //2.1
            let current = this.head;//当前节点,用于获取下一个节点
            let previous = null;//前驱节点
            let index = 0;//计数器
            //查找前一个节点
            while (index < position) {
                previous = current;//前一个元素
                current = current.next;//后一个元素
                index++
            }
            node.next = current;
            previous.next = node;
        }
        this.length++;
        return true
    }
    //修改某个位置上的值
    LinkedList.prototype.update = function (position, data) {
        if (position < 0 || position >= this.length) return false;

        let index = 0;
        let current = this.head
        while (index < position) {
            current = current.next;
            index++
        }
        current.data = data
    }
    LinkedList.prototype.get = function (position) {
        if (position < 0 || position >= this.length) return false;

        let index = 0;
        let current = this.head
        while (index < position) {
            current = current.next;
            index++
        }
        return current.data;
    }
    //
    LinkedList.prototype.indexOf = function (ele) {
        let index = 0;
        let current = this.head;
        while (current) {
            if (current.data === ele) {
                return index
            }
            current = current.next
            index++;
            // return index;
        }
        //找不到
        return -1

    }
    //删除特定位置的节点
    LinkedList.prototype.removeAt = function (position) {
        if (position < 0 || position >= this.length) return null;

        if (this.length === 1) {
            this.head = null;
        } else {
            if (position === 0) {
                this.head = this.head.next;
                // console.log('a')///s
            } else {
                let current = this.head;
                let previous = null;
                let index = 0;
                while (index < position) {
                    index++;
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
        }

        this.length--
        return true;
    }
    //删除链表中的某一项
    LinkedList.prototype.remove = function (ele) {
        //直接调用前面两个方法
        let position = this.indexOf(ele);

        return this.removeAt(position)
    }
    LinkedList.prototype.isEmpty = function () {
        return this.length === 0;
    }
    LinkedList.prototype.size = function () {
        return this.length;
    }
}

let list = new LinkedList()
list.append(1)
list.append(12)
list.append(22)
list.insert(0, 0)
list.insert(2, 2)
console.log(list.toString())

list.update(2, 3)

console.log(list.toString())
list.removeAt(0)
console.log(list.toString())
list.remove(22)
console.log(list.toString())

console.log(list.get(1))
console.log(list.indexOf(1))


