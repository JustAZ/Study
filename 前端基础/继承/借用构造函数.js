// 使用父类的构造函数来增强子类实例，等同于复制父类的实例给子类（不使用原型）
function SuperType(){
    this.colors = ['red','blue','greens']    
}
function SubType(){
    //关键代码
    //创建子类实例时,调用超类构造函数,相当于SubType的每一个实例都会将SuperType中的属性复制一份
    SuperType.call(this)
}
let instance1 = new SubType();
instance1.colors.push('black');
console.log(instance1.colors)
let instance2 = new SubType();
console.log(instance1.colors)
/**
 * 缺点:
 * 1.只能继承父类的属性和方法,无法继承原型的属性和方法
 * 2.无法实现复用,每一个子类都包含父类实例函数的副本    
 */