// let a =1
let currying = function (fn) {
    //柯里化函数
    // let _self = this;
    let args = [];
    return function () {
        if (arguments.length === 0) {
        //   return  fn.apply(this, args)
        return fn.apply(this,args)
        } else {
            [].push.apply(args, arguments)
            // args.push(arguments)
            // return;
            return arguments.callee;
        }
    }
}

let cost = (function () {
    // let a = 0;
    let money = 0;
    return function () {
        for (let i = 0; i < arguments.length; i++) {
            money += arguments[i]
        }
        return money;
    }

})()


let cost1 = currying(cost)
console.log(cost1(1000))
// cost1(2000)
// cost1(3000)

console.log(cost1())
