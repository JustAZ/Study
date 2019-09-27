//结合借用构造函数传递参数和寄生模式实现继承
//思路:不必为了指定子类型的原型而调用超类型的构造函数
//本质:使用寄生式继承来继承超类型的原型,然后再将结果指定给子类新的原型
function inherit(subType,superType){
    // var prototype = object(superType.prototype)
    let prototype = Object.create(superType.prototype)
    prototype.constructor = subType;
    subType.prototype = prototype;//指定对象
}
function Super(name){
    this.name = name;
    this.colors = ["red","blue","green"]
}
Super.prototype.sayName = function(){
    console.log(this.name)
}
function subType(name,age){
    SuperType.call(this,name);//获取构造函数属性
    this.age = age;
}
inherit(SubType,Super)//继承原型上的属性和方法
