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
    while (newL1) {
        a.push(newL1.val);
        newL1 = newL1.next;
    }
    while (newL2) {
        b.push(newL2.val);
        newL2 = newL2.next;
    }
    // 反转过后会影响初始值
    a.reverse();
    b.reverse();
    console.log(a, b);

    let ans = [];//存放两位相加的结果
    let carry = 0;//是否进位
    // a、b之间只有一个还有就不结束
    while (a.length || b.length) {
        // 不确定a、b谁长
        // 只要a还存在 就将a的第一个拿出来  只要b还在就将b的第一个拿出来
        let c = a.length ? a.shift() : 0;
        let d = b.length ? b.shift() : 0;

        let sum = c + d + carry;
        // 第一位相加 加上进位
        ans.push(sum % 10);
        // 处理进位问题
        if (sum >= 10) {
            carry = 1;
        } else {
            carry = 0;
        }
    }
    // carry存在就执行&&后面的东西
    carry && (ans.push(carry))//最高位进位
    ans.reverse();
    // 转为字符串
    // return ans.join('')


    // 返回的应该也是一个节点，头节点
    let ret = [];
    for (let i = 0, len = ans.length; i < len; i++) {
        ret[i] = new ListNode(ans[i]);
    }
    // 最后一个不用计算
    for (let i = 0, len = ans.length; i < len - 1; i++) {
        ret[i].next = ret[i + 1]//指针
    }
    // 返回头节点
    return ret[0];
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

let ret = addTwoNumbers(a1, b1)
while(ret){
    console.log(ret.val)
    ret = ret.next;
}
// let node = a1
// while (node ) {
//     console.log(node.val)
//     node = node.next
// }
