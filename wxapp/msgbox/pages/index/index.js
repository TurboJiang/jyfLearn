Page({
  data: {

  },
  showPopup: function () {
    // 点击按钮出现弹窗
    this.popup.showPopup();
  },
  onLoad: function () {
    this.popup = this.selectComponent('#popup');
  },
  _error() {
    this.popup.hidePopup();
  },
  _success() {
    this.popup.hidePopup();
  },
  change: function (e) {
    // console.log('catch')
    var mComponent = this.selectComponent('#myComponent');
    mComponent.setText('外部调用了');
  },
  onTextChange:function(){
    wx.showToast({
      title:'捕获事件'
    })
  }
})