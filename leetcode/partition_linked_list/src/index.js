// 实现一个链表 数据存储特征是链表格式

import LinkedList from './LinkedList';


// 实现一个链表:只操作头就完事儿了 有头有尾为链表
const partition = (head, x) => {
    let cur = head,next;
    // 分成两个节点
    let preHead,//小于
        preTail,
        afterHead,//大于
        afterTail;
    if (head === null) {
        return null;
    }
    while (cur) {//一次遍历
        next = cur.next;
        cur.next = null;//打掉以前的关系
        if (cur.val < x) {
            if (!preHead) {//空链表时
                preHead = cur;
                preTail = cur;
            }else{
                preTail.next = cur;
                preTail = cur;
            }
        }else{
            if (!afterHead) {//空链表时
                afterHead = cur;
                afterTail = cur;
            }else{
                afterTail.next = cur;
                afterTail = cur;
            }
        }
        cur = next;//cur=cur.next
        
    }
    if(preTail){
        preTail.next = afterHead
        return preHead
    }else{
        return afterHead;
    }
    preTail.next = afterHead;
}

// 实例化
const list = new LinkedList();
// 形成一个链表
list
    .append(1)
    .append(4)
    .append(3)
    .append(2)
    .append(5)
    .append(2)
// console.log(list.toString())
const newHead = partition(list.head,3)
console.log(newHead)
let curNode =newHead
while(curNode){
    console.log(curNode.val,curNode.next)
}