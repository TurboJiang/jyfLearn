// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: {
      name: '',
      phone: '',
      detail: ''
    }
  },
  bindName(e){
    console.log(e)
    this.setData({
      'address.name':e.detail.value
    })
  },
  bindPhone(e){
    console.log(e)
    this.setData({
      'address.phone':e.detail.value
    })
  },
  bindDetail(e){
    console.log(e)
    this.setData({
      'address.detail':e.detail.value
    })
  },
  formSubmit() {
    // 判断三条数据是否存在
    if (this.data.address.name && this.data.address.phone && this.data.address.detail) {
      // 存储数据
      wx.setStorage({
        key: 'address',
        data: this.data.address,
        // 如果成功则执行返回
        success: (result) => {
          wx.navigateBack();
        }
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '请填写完整资料',
        // 让页面上不出现取消按钮 只有确认按钮
        showCancel: false
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})