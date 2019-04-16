蜗牛爱吃香蕉
N piles bananas 每pile bananas有不同数量的bananas
[3,6,7,11]
[30,11,23,4,20]
每个小时可以吃某一pile中的n只banana 规定H小时内吃完，吃没把的香蕉的时候要不就是吃m只 要么就吃剩下的

koko banana
- 把香蕉吃完函数 canEatAllBananas return h>=H 
    h来自于吃法规则 一小时mid只 一次只吃一把
- while去疯狂的试 1，2，3，4.....Math.max(...piles)能拿到结果，但是太慢了按最大的来
    使用最中间的 最快 使用二分法 使用二分法查找优化查找的效果


简单查找 时间开销为n
二分查找的写法有规律
在x  y 要找的是最小符合条件的min 可来优化的 直接找中间值  mid=x+((y-x)>>1)
        小了x=mid+1
        大了y=mid-1
        时间开销为log2(N)远小于简单查找