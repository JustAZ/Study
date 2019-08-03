//基于数组封装一个队列
function Queue() {
    this.queue = [];
    //入队
    Queue.prototype.push = function (item) {
        this.queue.push(item);
    }
    //出队
    Queue.prototype.unshift = function (item) {
        this.queue.shift();
    }
    //队列元素个数
    Queue.prototype.size = function () {
        return this.queue.length;
    }
    //返回队首元素
    Queue.prototype.peak = function () {
        return this.queue[0]
    }
}

//队列应用
//击鼓传花
//规则:几个朋友一起玩游戏,围成一圈,开始数数,数到某个数字就淘汰
//最后剩下的这个人会获得胜利.

//封装一个基于队列的函数
//参数:所有参与人的姓名,游戏规则需要的数字
//结果,胜出游戏的人
function passGame(nameList, num) {
    let que = new Queue();
    //将参与人放到队列中去
    for (let i = 0; i < nameList.length; i++) {
        que.push(nameList[i])
    }

    //循环数数
    //通过将num前的参与取出放到队末,将num直接出队,然后再次进行数数
    while (que.size <= 1) {
        //将数字num前的参与人出队,再插入到队末
        for (let i = 0; i < num - 1; i++) {
            que.push(que.pop());
        }
        //数到num的参与人出队,此时由于num前的参与人添加到队末,所以num在队首
        que.pop()
    }

    return que.peak();

}
let name_list = ['杰少', '航叔', '杰哥', '涛哥']
console.log(passGame(name_list, 3))



