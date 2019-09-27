/**
 * 组合继承是将原型链和借用构造函数组合在一起
 * 思路是:
        1.使用原型链实现对原型属性和方法的继承
        2.通过借用构造函数来实现对实例属性的继承
 */
function Super(name){
    this.name = name;
    this.colors = ['red','blue','green'];
}
Super.prototype.sayName = function(){
    console.log(this.name);
}
function Sub(name,age){
    //借用构造函数,继承超类属性
    Super.call(this,name);//第一次调用super
    this.age = age;
}
//原型链继承
Sub.prototype = new Super()//第二次调用super
//手动改变构造函数指向
Sub.prototype.constructor = SubType;
Sub.prototype.sayAge = function(){
    console.log(this.age)
}

//每一个实例都拥有自己属性
let instance1 = new Sub('zyz',21);
instance1.colors.push('black')
console.log(instance.colors)
//对原型属性的更改互不影响
let instance2 = new Sub('az',22);
console.log(instance.colors)
/**
 * 缺点:
 *      会调用两次超类型构造函数
 *      1.创建子类型原型的时候
 *      2.在子类型构造函数内部
 */
