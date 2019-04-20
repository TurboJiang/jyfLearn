// 缓存计算结果 不要重复计算 计算了的 保存起来——>保存在哪？以哪种方式？

// 1,2,3  4,5,6
// key string <= arguments类数组
// function mult() {
// 参数的数量是不定的
// 返回number类型
// arguements类数组
//     let a = 1;
//     for (var i = 0, l = arguments.length; i < l; i++) {
//         a = a * arguments[i];
//     }
//     return a;
// }
// console.log(mult(1, 2, 3));


// es6
// function mult(...agrs) {
//     let a = 1;
//     for (var i = 0, l = arguments.length; i < l; i++) {
//         a = a * arguments[i];
//     }
//     cache[key] = a;
//     return a;

// }
// console.log(mult(1, 2, 3));


let cache = {};
function mult() {
    let a = 1;
    //key必定与args相关，要将数组=》string key、
    let key = Array.prototype.join.call(arguments, ',');
    if (cache[key]) {//键名是常量 用中括号访问
        console.log('从缓存中取');
        return cache[key];
    }
    for (var i = 0, l = arguments.length; i < l; i++) {
        a = a * arguments[i];
    }
    cache[key] = a;
    return a;
}
console.log(mult(1, 2, 3));
// 以下两次均从缓存中读取数据 不重新进行计算
console.log(mult(1, 2, 3));
console.log(mult(1, 2, 3));