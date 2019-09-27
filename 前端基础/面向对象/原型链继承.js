//通过将一个类型的实例赋值给另一个构造函数实现的
function SuperType(){
    this.property = 'father';
    this.colors = ['red','blue','greens']
}
SuperType.prototype.getSuperValue = function(){
    return this.colors;
}
function SubType(){
    this.subproperty = 'son';
}
//关键一步
//将SubType的原型对象指向,SuperType的实例
//即SubType.prototyp.__proto__ = SuperType.prototype
SubType.prototype = new SuperType()

SubType.prototype.getSubValue = function(){
    return this.subproperty;
}
let instance = new SubType();
instance.property = 'zyz'
instance.colors.push('black')//操作继承自超类的引用类型属性
console.log(instance.getSuperValue())
let instance2 = new SubType();
console.log(instance2.property)
console.log(instance2.getSuperValue())

/**
 * 需注意,
 * 1.给原型添加方法的代码一定要放在替换原型之前
 * 2.对象实例共享所有继承的属性和方法,多个实例对引用类型的操作会被篡改。--借用构造函数解决
 * 3.无法做到不影响对象实例的情况下,给超类的构造函数传递参数
 */