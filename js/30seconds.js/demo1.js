
// 高阶函数的考题

// ary 运行结果是函数
// 参数：(函数，个数)  slice(0,n) 从0开始 到n-1结束
const ary = (fn, n) => (...args) => fn(...args.slice(0, n));
// 2 将数组元素中的每一项的前两位进行比较得出最大值
const firstTwoMax = ary(Math.max, 2);
console.log([[2, 6, 'a'],[8, 4, 6],[10]].map(x => firstTwoMax(...x)));
