##大数相加
- 数字太大，相加，会导致溢出
 解决方案：字符串表达大数字 相加的算法 最后一位相加 carry + 加的结果，放进数组，使用反序
- 数据结构处理
    如果不用字符串表达，有没有表达方式？——单向链表 LinkedList

#推荐算法 
- 链表
    有点像数组，可以存一堆的数据
    数组是连续空间
    链表是不连续的额，更优 通过指针连起来
    每个节点 LinkedNode
    {val:1,next:null}

1. 初始化链表 new ListNode(2)
val  next
2. 遍历链表
while(node){
    node = node.next;
}
3. 数组转变成链表
    - 第一次循环 val
    - 第二次next-1 //最后一位没有next

- 大数相加 可以选择字符串 但链表更自然
 最后返回的也是相应的数据结构


 C:\WINDOWS\System32\WindowsPowerShell\v1.0\powershell.exe