// 节点 带数据的节点 会指出下一个节点 所以有必要找出头节点
class LinkedListNode {
    constructor(val) {
        // 指针？指针是链表形成的钥匙 有了指针 所以可以不连续
        this.val = val;
        this.next = null;
    }
}

export default LinkedListNode;