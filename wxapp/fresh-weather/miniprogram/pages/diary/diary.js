// miniprogram/pages/diary/diary.js
const app = getApp()

import { dateFormat } from '../../lib/utils'
const globalData = app.globalData
import { jscode2session, getEmotionByOpenidAndDate, addEmotion } from '../../lib/api'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeEmotion: 'serene',
    todayEmotion: '',
    // 全局中的用户信息中的头像
    avatarUrl: globalData.avatarUrl,
    nickname: globalData.nickname,
    emotions: ['serene', 'happy', 'ecstastic', 'sad', 'terrified'],
    colors: {
      serene: '#64d9fe',
      hehe: '#d3fc1e',
      ecstatic: '#f7dc0e',
      sad: '#ec238a',
      terrified: '#ee1aea'
    },
    daysStyle: [],
    auth: -1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 封装用户获取权限的方法
  getScope(success, fail, name = 'scope.userInfo') {
    wx.getSetting({
      success: (res) => {
        if (res.authSetting[name]) {
          typeof success === 'function' && success()
        } else {
          typeof fail === 'function' && fail()
        }
      },
      fail: () => { },
      complete: () => { }
    })
  },
  // 获取用户信息
  getUserInfo() {
    if (!globalData.nickname || !globalData.avatarUrl) {
      this._getUserInfo((res) => {
        this.setData({
          nickname: res.nickname,
          avatarUrl: res.avatarUrl
        })
        // 将nickname avatarUrl存入全局中
        globalData.nickname = res.nickname
        globalData.avatarUrl = res.avatarUrl
      })
    }
    const that = this
    // getStorageSync = getStorage
    let openid = wx.getStorageSync('openid')
    function callback() {
      // 将 openid存入数据源
      that.setData({
        auth: 1,
        openid
      })
      if (globalData.currentMonthData && globalData.currentMonthData.length) {
        const now = new Date()
      } else {
        that.setCalendarColor()
      }
      if (openid) {
        // 有就执行callback
        callback()
      } else {
        // 没有openid 就获取一个 再执行callback
        this.getUserOpenId((res) => {
          openid = res.result.openid
          callback()
        }, () => {
          this.setData({
            auth: 0
          })
        })
      }
    }
  },
  // 小程序登陆 获取openid
  getUserOpenId(success, fail) {
    wx.login({
      success: (res) => {
        jscode2session(res.code).then((res) => {
          let { openid = '', session_key = '' } = res.result || {}
          if (openid && session_key) {
            // 存进本地存储
            wx.getStorage({
              key: 'openid',
              data: openid
            })
            typeof success === 'function' && success(res)
          }
          else {
            typeof fail === 'function' && fail()
          }
        })
      },
      fail: () => { },
      complete: () => { }
    })
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