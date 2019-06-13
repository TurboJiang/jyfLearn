function ListNode(val) {
    this.val = val;
    this.next = null;
}

var mergeTwoLists = function (l1, l2) {
    // 将节点放入数组(有sort方法，可以立即排序)
    var ans = [];
    // 循环链表的每个节点,放进ans数组中
    while (l1) {
        ans.push(new ListNode(l1.val))
        l1 = l1.next;
    }
    while (l2) {
        ans.push(new ListNode(l2.val))
        l2 = l2.next
    }
    // 数组排序
    ans.sort(function (a, b) {
        return a.val - b.val
    })
    // 防止传进的链表为空
    if (!ans.length) return null;
    // 排序之后合成指针 形成新的有序链表
    for (var i = 0, len = ans.length; i < len - 1; i++) {//len-1链表最后一项为空
        ans[i].next = ans[i+1];
    }
    // console.log(ans)
    // 返回第一项
    return ans[0];
}

var a1 = new ListNode(1);
var a2 = new ListNode(2);
a1.next = a2
var a3 = new ListNode(4);
a2.next = a3

var b1 = new ListNode(1);
var b2 = new ListNode(3);
b1.next = b2
var b3 = new ListNode(4);
b2.next = b3

var l3 = mergeTwoLists(a1, b1);

while(l3){
    console.log(l3.val);
    l3 = l3.next;
}