/**
 * 寄生式继承,即创建一个仅用于封装继承过程的函数
 * 核心：在原型式继承的基础上，增强对象，返回构造函数
 */
function object(o){
    function F(){}
    F.prototype = o;
    //返回F的实例
    return new F()
}
function createA(original){
    let clone = object(original);
    clone.sayHi = function(){
        console.log('Hi')
    }
    return clone;
}
var person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
  };
  var anotherPerson = createA(person);
  anotherPerson.sayHi(); //"hi"

  /**
   * 原型链继承多个实例的引用类型属性指向相同，存在篡改的可能。
     无法传递参数
   */