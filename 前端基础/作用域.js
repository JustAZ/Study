var length = '10'
function fn() {
    console.log(this.length)
}
var obj = {
    length: 5,
    method:(...arguments)=>{
        fn.call(obj)//5
        console.log(this.length) //10 this指向window
        fn() //10
        arguments[0]() //2
    }
}

fn()
obj.method(fn,1)

var length = 5
function fun(){
    console.log(this.length)
}
var arr = [fun]

fun()     // 5
arr[0]() //1