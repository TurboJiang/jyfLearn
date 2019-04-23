// 会计 计算年终奖  绩效S
// 绩效等级 A 3 B 2 C 1 D
// 会计发钱的 
// 指定发钱策略区分开来  将其转为一个个的策略函数

var perfomanceS = function (salary) {
    return salary * 5;
}
var perfomanceA = function (salary) {
    return salary * 4;
}
var perfomanceX = function (salary) {
    return salary * 60;
}
var calculateBounce = function (perfomanceLevel, salary) {
    if (perfomanceLevel === 'X') {
        return perfomanceX(salary);
    }
    // 分支太多？如何优化？
    if (perfomanceLevel === 'S') {
        return perfomanceS(salary);
    }
    if (perfomanceLevel === 'A') {
        return perfomanceS(salary);
    }
}
console.log(calculateBounce('X', 20000));

