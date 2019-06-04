##分隔链表 数据结构
- 抽象能力 ADT 具像来引导
- 解决特写问题
    1. leetcode 数据结构题
        LinkedList 类
    2. 会以github排名第一位的algorithm OO写法
        LinkedList类封装成class export default
    3. 结合webpack 将数据结构变得可见既可得

# 手动实现一个链表
- 有一个链表(用于存放数据，与数组的区别：不连续的)1->4->3->2->5->2
  找到head 1
  链表是一个对象，服务于各种算法
    - 节点node n个节点构成一个链表 第一个为head 最后一个是tail    
        要进行各种数据算法 就要进行模块化(只要写一次，下次直接引入即可)
        模块化 一个文件一个类 ————>es6模块化方法 export default
            append()————>链表数据结构的ADT(抽象数据行为)
    - index.js 业务代码 实例化对象


    - node不支持es6的模块化，原生支持的require commonJS
    需要compile/presets一下

    - ADT抽象数据类型
    链表 数据结构 配套方法
    append()
    toString
    toArray()

- 链表 head = 1->4->3->2->5->2 给定数值x=3
    对链表进行分隔，小于x的节点放在左边，大于等于x的节点放在其后，不影响之前的顺序
    1->2->2 左链表
    4->3->5 右链表
    链表：head、tail、append
    两个链表 首尾相连 tail1.next=head2