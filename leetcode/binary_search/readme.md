在一个一维正整数数组中，查找数 
如果有返回下标 否则返回-1

二分查找 可以将查找的效率从n——>log2(n)
[1,10,3,6,9] 未排序的数组不适合二分查找

- 二分查找呀注意的问题和bug
    (min+max)/2 存在内存的限制 
    2. 在基础之外考虑异常 BAT考题——溢出
        二分查找mid计算方法规避溢出
            mid = min + (max-min)/2 // 有效的规避溢出问题
        考察语言的底层
