'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// es6写法部分浏览器不支持
var a = 1,
    b = 2,
    c = a + b;
console.log(c);

[1, 2, 3].map(function (item) {
    return item + 'item';
});

// es6大部分功能es5也是能实现的 只不过不够优雅
// es6 展开运算符 (spread operator) ...
var jyf = { name: '刘昊然', hometown: '平顶山' };
jyf = _extends({}, jyf, { "company": '腾讯' });

console.log(jyf);
