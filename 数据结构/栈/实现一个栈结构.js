//基于数组封装一个栈结构
//面向对象
function Stack() {
    //创建一个属性
    this.items = []
    //常见的操作方法
    //进栈操作
    Stack.prototype.push = function (el) {
        this.items.push(el);
    }
    //出栈操作,并返回该值
    Stack.prototype.pop = function () {
        return this.items.pop();
    }
    //判断栈是否为空
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    }
    //获取栈顶值
    Stack.prototype.peak = function () {
        return this.items[this.items.length - 1];
    }
    //获取栈的大小
    Stack.prototype.size = function () {
        return this.items.length;
    }
    //toString方法
    Stack.prototype.toString = function () {
        return this.items.join(' ')
    }
}

//创建栈实例
// let s = new Stack()

// s.push(1);
// s.push(2);
// s.push(3);

// console.log(s.peak());
// s.pop();
// console.log(s.peak());
// console.log(s.toString())
// console.log(s);

//栈的应用 十进制转二进制  余数的逆序
function decToBin(dec_number) {
    //创建一个栈用于保存余数,转换位二进制码
    let stack = new Stack();
    //除2取余放进栈中
    while (dec_number > 0) {
        stack.push(dec_number % 2);
        dec_number = Math.floor(dec_number / 2);
    }
    //取出栈中元素就是二进制码
    bindaryString = ''
    while(!stack.isEmpty()){
        bindaryString += stack.pop()
    }
    return bindaryString;
}
console.log(decToBin(10))
console.log(decToBin(100))
