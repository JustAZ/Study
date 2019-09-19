function deepClone(args) {
    let obj = Array.isArray(args) ? [] : {};
    for(let key in args){
        if(typeof args[key] == 'object'){
            obj[key] = deepClone(args[key])
        }else{
            obj[key] = args[key]
        }
    }
    return obj;
}

let a = {a:'1',b:{c:{d:'1'}}}

let b = [1,2,3,{a:{b:{c:'1'}}}]

console.log(deepClone(a))

console.log(deepClone(b))
