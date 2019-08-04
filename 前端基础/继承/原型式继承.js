/**
 * 可以通过Object.create()来实现原型式继承,继承传入对象
 * 不必预先定义构造函数的情况下实现继承,本质是执行对给定对象的浅复制,而复制得到的副本还可以进步改造
 */
//Object.create()原理
//object()对传入其中的对象执行了一次浅复制，将构造函数F的原型直接指向传入的对象。
function object(o){
    function F(){}
    F.prototype = o;
    //返回F的实例
    return new F()
}
let person = {
    name:'zyz',
    friends:['jj','cc']
}
let aPersoon = Object.create(person);
aPersoon.name = 'aaz';
aPersoon.friends.push('dd')

console.log(person.friends)
/**
 * 原型链继承多个实例的引用类型属性指向相同，存在篡改的可能。
   无法传递参数
 */