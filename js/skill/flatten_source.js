function flatten(arr) {
    // 验证是否是数组
    if (!Array.isArray(arr)) {
        return false;
    }
    // 1、使用递归思想 将多层数组的扁平化分为多个一维数组  跟旁边的数字、字符串concat
    // 递归一定有退出条件  条件是不再有数组了 reduce消除数组
    const flattenArr = arr.reduce((prev, cur) => {
       return prev.concat(Array.isArray(cur) ? flatten(cur) : cur);
    },[]);
    return flattenArr;
}

const arr = [1,[2,[3]]];
console.log(flatten(arr));