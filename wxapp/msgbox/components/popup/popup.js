Component({
    // page传来的参数
    properties: {
        title: {
            type: String,
            value: '标题'
        },
        content: {
            type: String,
            value: '内容'
        },
        btn_no: {
            type: String,
            value: '取消'
        },
        btn_ok: {
            type: String,
            value: '确定'
        }
    },
    // 弹窗显示还是隐藏
    data: {
        flag: true
    },
    // 组件在页面中被调用 组件内部的方法用methods声明
    methods: {
        hidePopup: function () {
            this.setData({
                flag: !this.data.flag
            })
        },
        showPopup() {
            this.setData({
                flag: !this.data.flag
            })
        },
        _error() {
            // 告知外界触发一个error事件(由内向外)
            this.triggerEvent("error");
        },
        _success() {
            // 告知外界触发一个success事件
            this.triggerEvent("success");
        }
    }
})