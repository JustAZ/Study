//若是引入第三方模块,应该放置在最前面

//引入自定义模块
let module1 = require('./modules/modules1')
let module2 = require('./modules/modules2')
let module3 = require('./modules/modules3')

module1.foo() //module1
module2() //module2
module3.foo() //foo() module3
// console.log(uniq(module3.arr)) //[ 1, 2, 3 ]