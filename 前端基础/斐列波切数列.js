/**
 * 斐列波切数列是指,除了第一个和第二个数为1外,后面都遵从,后一个数等于前面两数之和
 * 
 */
function fib(arg) {
    if (arg <= 0) {
        return -1;
    }
    if (arg == 1 || arg == 2) {
        return 1
    }
    return fib(arg - 1) + fib(arg - 2)
}
console.log(fib(0))