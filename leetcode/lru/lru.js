// 缓存？不用每次都去硬盘中下载 直接在内存中
// 在存拿中实现最近最少使用
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.obj = {}; //key
    this.arr = [];
};
// 使用JSON对象字面量来处理数据
LRUCache.prototype.get = function (key) {
    // 正值 有 返回值 设置为最近使用 没有 -1
    var val = this.obj[key];
    // 容量不大的内存服务于最多的进程
    if (val > 0) {
        var index=this.arr.indexOf(key);
        this.arr.splice(index,1);
        this.arr.unshift(key);
    }
    else {
        return -1;
    }
};
LRUCache.prototype.set = function (key, value) {
    // 若有key 则返回 没有的话 （存进去）两种可能：存储之前进行判断 
    // 若内存满了 要执行arr.pop()，若没有arr.unshift()
    if (this.obj[key]) {
        this.obj[key] = value;//在此之前已经有这个key了 为了更新
        // 最近使用的 就是数组的第一个 [0]
        // 移位之后如何将之前的删除
        var index = this.arr.indexOf(key);
        this.arr.splice(index, 1);//根据下标将原来的删除
        this.arr.unshift(key);
    } else {
        // 灭有的话 
        if (this.capacity === this.arr.length) {
            // 放满了 将最近最少使用的删除 删除数组以及对象字面量中的值
            var k = this.arr.pop();
            this.obj[k] = undefined;
        } else {
            this.obj[key] = value;
            this.arr.unshift(key);
        }
    }
};