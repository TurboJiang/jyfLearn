// 俩大数相加会溢出
// 使用字符串，链表
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * 在此之前应准备好链表 将两个大数转为链表格式
 * @param {LinkedList} l1 
 * @param {LinkedList} l2 
 */
var addTwoNumbers = function (l1, l2) {
    // 负责接住第一个链表的每一位
    let a = []
    // 接住第二个链表的每一位
    let b = []
    // 引用赋值原理
    newL1 = l1, newL2 = l2;//不会改变值
    // 倒着来相加
    while(newL1){
        a.push(newL1.val);
        newL1 = newL1.next
    }
    while(newL2){
    b.push(newL2.val);
        newL2 = newL2.next
    }
    a.reverse();
    b.reverse();
    console.log(a,b)
}

let a1 = new ListNode(1);
let a2 = new ListNode(2);
let a3 = new ListNode(3);
a1.next = a2;
a2.next = a3;


let b1 = new ListNode(4);
let b2 = new ListNode(5);
let b3 = new ListNode(6);
b1.next = b2;
b2.next = b3;

addTwoNumbers(a1, b1)
// let node = a1
// while (node ) {
//     console.log(node.val)
//     node = node.next
// }
