LRU 缓存  最近最少使用原则
Least recently Used
操作系统

node fs 了解了深深的硬盘以及内存的概念
内存精贵
硬盘用不完

内存是代码的运行空间 但是空间是有限的 假设内存空间单位为2 往里面存放变量 
                                    一个变量占一个单位 则只能放两个 max length 2
                                    put(1) put(2) 3就放不下了
                                    原则：最近最少使用
        
            1 put(1,1)
            2 put(2,2)
            3 get(1) 返回1 1最近使用 2成为最近最少使用 
            4 put(3,3) 3进去了 2丢出
            5 get(2)拿不到2值了 已经被丢出
            6 put(4,4) 4放进去 3也在 1被丢出
            7 get(1) 找不到 返回-1
              get(3) 3
              get(4) 4
    
- cache 缓存 LRUCache
    实现两个方法 get & set  
    - 对象字面量有利于get set方法的实现
    - 最近最少使用 JSON搞不定 没有先后顺序 数组可以 [0],[length-1] 
        在一头进行操作 在头部进行添加unshift 在尾部进行删除pop 
        一半工作交给数组 一半交给对象字面量 
        让它们成为LRUCache的两个属性
    1. get
    2. set
    对于数组arr + 字面量obj组织在LRUCache
        使用indexOf pop unshift splice
