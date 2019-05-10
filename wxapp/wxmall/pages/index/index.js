//index.js
//获取应用实例
const WXAPI = require('../../wxapi/main')

Page({
  data: {
    goods: [],
    categories: [],
    activeCategoryId: 0,
    banners: [],
    autoplay: true,
    interval: 3000,
    duration: 1000,
    swiperCurrent: 0
  },
  swiperchange(e) {
    console.log(e)
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  onLoad() {
    // 界面问题不大 要有开发的流程和标准是做一个新(大)项目的需要
    this.loadGoods();//商品列表
    this.getBanners();//广告位
    this.getCategory();//分类
    this.getRecommend();//爆款推荐
  },
  getRecommend() {
    WXAPI.loadGoods({
      recommendStatus: 1
    })
      .then(res => {
        if (res.code === 0) {
          this.setData({
            goodsRecommend: res.data
          })
        }
      })
  },
  getCategory() {

  },
  loadGoods() {

  },
  getBanners() {
    WXAPI
      .getBanners({
        type: 'new'
      })
      .then(res => {
        console.log(res);
        // 大厂API接口的维定 code=0 指的是没有问题
        if (res.code === 0) {//严谨
          this.setData({
            banners: res.data
          })
        }
      })
  }
})
