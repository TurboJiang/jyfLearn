// 返回绝对的物理路径 项目所在当前设备上的路径
const path = require('path');
// 拼接地址 项目所在当前设备上的路径+指定路径
console.log(path.resolve(__dirname, 'src'));