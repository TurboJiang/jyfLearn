// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasList: false,
    cart: [],
    selectAllStatus: true,
    totalPrice: ''
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
    setTimeout(() => {
      this.setData({
        hasList: true,
        carts: [
          { id: 1, title: '新鲜芹菜 半斤', image: '/image/s5.png', num: 4, price: 0.01, selected: true },
          { id: 2, title: '素米 500g', image: '/image/s6.png', num: 1, price: 0.03, selected: true }
        ]
      })
      this.getTotalPrice();
    }, 1000);
  },
  selectAll() {
    let selectAllStatus = this.data.selectAllStatus
    selectAllStatus = !selectAllStatus
    let carts = this.data.carts
    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = selectAllStatus;
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      carts: carts
    })
  },
  // 计算价钱
  getTotalPrice() {
    let carts = this.data.carts;
    let total = 0;
    for (let i = 0; i < carts.length; i++) {
      if (carts[i].selected) {
        total += carts[i].num * carts[i].price
      }
    }
    this.setData({
      totalPrice: total.toFixed(2)
    })
  },
  // 减
  minusCount(e) {
    // console.log(e);
    const index = e.target.dataset.index;
    // 获取数据源
    let carts = this.data.carts
    let num = carts[index].num
    if (num <= 1) {
      return
    }
    num = num - 1;
    carts[index].num = num
    // 修改数据源
    this.setData({
      carts: carts
    })
    this.getTotalPrice();
  },
  // 加
  addCount(e) {
    // console.log(e);
    const index = e.target.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num
    num = num + 1
    carts[index].num = num
    this.setData({
      carts: carts
    })
    this.getTotalPrice();
  },
  deleteList(e) {
    // 数组删除数据 splice 两个参数 从什么位置 多少条
    console.log(e)
    const index = e.target.dataset.index;
    const carts = this.data.carts;
    carts.splice(index, 1);
    this.setData({
      carts: carts
    })
    // 判断购物车是否被清空了
    if (!carts.length) {
      this.setData({
        hasList: false
      })
    }else{
      this.getTotalPrice()
    }
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