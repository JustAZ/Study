Function.prototype.myapply = function(context,arg){
    if(typeof this !=='function'){
        throw('not a function')
    }
    context = context || window
    arg = arg ? arg : []

    const key = Symbol();

    context[key] = this

    const result = context[key](...arg)

    delete context[key];

    return result;
}
