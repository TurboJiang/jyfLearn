// 模块文件

const add = (a, b) => {
    // 如果参数不对，(数量不对，类型不对)
    if (typeof a === 'string' && typeof b === 'string') {
        // 快速转换类型
        return +a + (+b)
    }
    return a + b    
}
// 向外输出add方法
module.exports = {
    add
}