/**
 * 
 * @param {number[]} piles 
 * @param {number} H 
 * @param {number} mid 
 * @return {boolean}
 */
function canEatAllBananas(piles, H, mid) {
    // 一定是H小时吃完
    let h = 0;//实际时间初始值
    // 吃香蕉了
    for (let pile of piles) {
        h += Math.ceil(pile / mid);//向上取整 一把香蕉花几小时吃完 有剩余的香蕉吃完也需要一个小时
    }
    return h <= H;//实际花费的时间比规定时间少则提早吃完true 等则吃完true 大于则吃不完false
}
/**
 * 
 * @param {number[]} piles 
 * @param {number} H 
 * @return {number}
 */
function minEatingSpeed(piles, H) {
    let lo = 1;//一小时最少吃一只香蕉
    let hi = Math.max(...piles);//取得香蕉数量最多的那一把香蕉
    // console.log(hi);
    while (lo <= hi) {
        // lo尝试
        let mid = lo + ((hi - lo) >> 1);//右移动一位快速取中间值
        // let m = lo;//平均
        console.log('---------', mid);
        // m正好可以？
        if (canEatAllBananas(piles, H, mid)) {
            hi = mid - 1;//查找吃完的最小的那一种情况
        } else {
            lo = mid + 1;//再次二分查找 即将最小值设为前一次mid值+1
        }
    }
    return lo;
}
console.log(canEatAllBananas([3, 6, 7, 11], 8, 4));
console.log(minEatingSpeed([3, 6, 7, 11], 8));