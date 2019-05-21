const err = (message) => {
    throw new Error(message);
}

function sum(num = err('first param is not defined'), otherNum = err('second param is not defined')) {
    return sum;
}
// console.log(1,2);  3
// console.log(undifined,10) 报错第一个参数没定义
// console.log(10) 第一个参数传了 第二个没有定义
console.log(sum(1,2));