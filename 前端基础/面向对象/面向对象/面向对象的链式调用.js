/**
 * 编写函数GoodDog函数,满足以下输出
 * GoodDog('Pupy').sit(3).bark().shakeHand()
 * 输出如下:
 * I am Pupy
 * 等待三秒
 * wang!wang!wang!
 * hand!
 * 
 */
function GoodDog(name) {
    this.name = name;
    console.log(this.name)
    this.sit = async function (num) {
        let start = Date.now()
        // setTimeout(function () {
        //     console.log('等待三秒,' + (new Date() - start))
        // }, num)
        // sleep(3000)
        // console.log('等待三秒,' + (new Date() - date))
        // while ((Date.now() - start) < num) {
        // }
        // console.log('等待' + num + "秒," + (Date.now() - start))
        
        return this
    }
    this.bark = function () {
        console.log("wang!wang!")
        return this
    }
    this.shakeHand = function () {
        console.log("hand!")
        return this
    }
    return this
}

GoodDog('Pupy').sit(9).bark().shakeHand()