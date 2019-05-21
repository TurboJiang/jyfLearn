// 模块文件

const add = (a, b) => {
    // 如果参数不对，(数量不对，类型不对)
    if (typeof a === 'string' && typeof b === 'string') {
        // 快速转换类型
        return +a + (+b);
    }
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    return NaN;
}
// 向外输出add方法
module.exports = {
    add
}