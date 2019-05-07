// 推平数组
// 引入lodash，使用flatten方法扁平化一个数组
// 双重数组
const _ = require('lodash');
const arr1 = [99, 0, 33, [202, 10, 1, 2]];
const flattenArr1 = _.flatten(arr1);
console.log(flattenArr1);
// [ 99, 0, 33, 202, 10, 1, 2 ]

// 三重数组
const arr2 = [99, 0, 33, [202, 10,[30,20]], 1, 2];
// [ 99, 0, 33, 202, 10, [ 30, 20 ], 1, 2 ]  flattenDeep解决多重数组
const flattenArr2 = _.flattenDeep(arr2);
console.log(flattenArr2);
// [ 99, 0, 33, 202, 10, 30, 20, 1, 2 ]

// 去除重复项
const arr3 = [2,1,2];
const uniqArr3 = _.uniq(arr3);
console.log(uniqArr3);


// 对数组进行排序 接受多个同时排序
const users = [
    {user:'fred',age:48},
    {user:'barney',age:36},
    {user:'fred',age:49},
    {user:'barney',age:34}
];
const sortedUser = _.sortBy(users,['user','age']);
console.log(sortedUser);

