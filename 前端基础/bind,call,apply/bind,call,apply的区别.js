/**
 * apply与call作用一样,只是传递的参数形式不一样
 * bind返回的任然是一个函数
 * 通过隐式绑定调用函数,这个函数就必须是context的一个属性
 */

const obj = {
    name:'Jerry',
    age:12,
    greet:function(){
        console.log(this.name +','+this.age)
    }
    
}
const obj2 = {
    name:'Tom',
    age:13
}

obj.greet()
obj.greet.call(obj2)
obj.greet.apply(obj2)
obj.greet.bind(obj2)()


