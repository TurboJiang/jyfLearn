// 本文件用于构建抽象的链表类，待会可以被实例化————>类、class

import LinkedListNode from './LinkedListNode.js'

// 1->4->3->2->5->2
class LinkedList {
    constructor() {
        // 链表关键是head
        this.head = null;
        this.tail = null;

    }
    // 在DOM的api中添加节点 一直append 就形成链表
    append(value) {
        const newNode = new LinkedListNode(value);
        if (!this.head) {//若当前是空链表
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            // 挂载之后 尾节点为newNode
            this.tail = newNode
        }
        // 如何实现链式调用
        return this;
    }
    toArray(){
        const nodes = [];
        let currentNode = this.head
        while(currentNode){
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }
        return nodes;
    }
    toString(){
        return this.toArray().map(node => node.val)
    }
}
export default LinkedList;//es6向外输出写法
