/**
 * 
 * @param {*绑定的执行上下文} context 
 * @param {*参数列表} arg 
 */

Function.prototype.mycall = function (context, ...arg) {
    if (typeof this !== 'function') {
        throw ('not a function')
    }

    context = context || window;
    arg = arg ? arg : [];

    const key = Symbol();
    //this是指向调用函数,谁调用指向谁
    //如 func.mycall(context,a,c,d), 
    //下面相当于 把函数func 放入到 context 对象中,即放到 context的执行上下文下,改变了this指向
    context[key] = this
    //传递参数,通过隐式绑定的方式调用函数
    const result = context[key](...arg)
    //取消引用
    delete context[key];

    return result;

    //上面的 context[key] = this 相当于给 context 对象克隆了一个 this即调用方法,等同于 
}

const personOne = {
    name: '张三',
    age: '12',
    say: function (gender, phone) {
        console.log(this.name + ',' + this.age + gender + ',' + phone)
    }
}
const personTwo = {
    name:'李四',
    age:'24'
}

personOne.say.myCall(personTwo,'女','123123')
/**
 * 此时mycall的this指向 personOne
 * context[key] = this ,相当于给 context 克隆了一个 personOne.say()方法
 * 所以 context[key]() 就相当于,context.pesonOne.say(),改变了this
 */

// obj = {
//      name = 'a'
// }