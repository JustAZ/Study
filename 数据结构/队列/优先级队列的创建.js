function PriorityQueue() {
    //创建内部类,存放元素内容和优先级,对数据进行包装
    function QueueElement(ele, priorty) {
        this.ele = ele;
        this.priorty = priorty;
    }

    //基于数组实现优先级队列
    this.item = [];

    //实现插入方法
    PriorityQueue.prototype.enqueue = function (ele, priorty) {
        //创建queueElement对象,对数据进行包装
        let queueElement = new QueueElement(ele, priorty);

        if (this.item.length === 0) {
            //若队列位空,则直接插入
            this.item.push(queueElement);
        } else {
            let add = false;//标志符,判断是否有添加
            for (let i = 0; i < this.item.length; i++) {
                if (queueElement.priorty < this.item[i].priorty) {
                    //插入到i之前
                    this.item.splice(i, 0, queueElement);
                    add = true;//插入成功
                    break;
                }
            }
            //若找不到优先级比较插入元素大的时候,则直接插入到队尾
            if(!add){
                this.item.push(queueElement);
            }


        }
    }
    //出队
    PriorityQueue.prototype.unshift = function (item) {
        this.queue.shift();
    }
    //队列元素个数
    PriorityQueue.prototype.size = function () {
        return this.queue.length;
    }
    //返回队首元素
    PriorityQueue.prototype.peak = function () {
        return this.queue[0]
    }
}

//调试代码
let pq = new PriorityQueue();
pq.enqueue('adc',1);
pq.enqueue('aec',1000);
pq.enqueue('afc',100);
console.log(pq);
