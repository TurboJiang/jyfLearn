function binary_search(arr, data) {
    // 1.计算出mid值小于往左大于就往右 没有就返回-1
    // 2.重复第一步
    // 退出条件，只有一个数了
    let min = 0,
        max = arr.length - 1,
        mid;
    // 无法再中分时 就判断数值
    while (min <= max) {
        // 只适合小范围的数据
        // mid = parseInt((min + max) / 2)

        // 有效的规避溢出问题
        mid = (min + (max - min) >> 1 );

        // 位移运算 右移一位得中间值
        // mid = (min + max) >> 1

        if (arr[mid] > data) {
            max = mid - 1;
        } else if (arr[mid] < data) {
            min = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
}
console.log(binary_search([1, 4, 7, 9, 10, 12], 10));

// 数组过分大 导致溢出 heap out of memory
let arr = [];
for (let i = 0; i < 100000; i++) {
    // 二分查找那个地方存疑？
    arr.push(i);
}
console.log(binary_search(arr, 2019));