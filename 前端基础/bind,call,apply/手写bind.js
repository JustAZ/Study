//返回一个函数,不会立即执行
Function.prototype.myBind = function(context,...arg){
    if(typeof this !== 'function'){
        throw('not a function')
    }
    self = this;
    arg = arg ? arg : [];
    return function Fn(newarguments){
        //有可能是构造函数的绑定,此时不改变this,只传递参数,
        //考虑函数使用new的情况
        if(this instanceof Fn){
            return self(...arg,...newarguments)
        }else{
            return self.apply(context,[...arg,...newarguments])
        }
    }
}