//app.js
App({
  onLaunch: function (options) {
    // 绑定作用域
    let self = this
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
        env: 'jiangyefang-ee4833'
      })
    }

    this.globalData.shareParam = options.query
    // 解决用户授权问题:查询用户是否授权？
    wx.getSetting({
      success: (result) => {
        // 已经授权
        if (result.authSetting['scope.userInfo']) {
          // 获取用户信息
          wx.getUserInfo({
            success: (infoRes) => {
              // 将获取到的用户信息进行存储
              self.globalData.userInfo = infoRes.userInfo
              if (self.catchUserInfo) {
                self.catchUserInfo(infoRes.userInfo)
              }

              // 若用户非新用户 更新个人信息
              wx.cloud.callFunction({
                name: 'createUser',
                // 用data包裹住 云函数会自动接收
                data: {
                  userInfo:infoRes.userInfo,
                  avatarUrl: infoRes.userInfo.avatarUrl,
                  name: '',
                  nickNme: infoRes.userInfo.nickNme,
                  sex: infoRes.userInfo.gender
                }
              })
            },
            fail: (err) => {
              console.log(err)
            },
            complete: () => { }
          })
        } else {
          wx.redirectTo({
            url: '/pages/login/login',
            success: (result) => {

            },
            fail: () => { },
            complete: () => { }
          });
        }
      },
      fail: () => { },
      complete: () => { }
    });
    // 取出用户信息
    wx.cloud.callFunction({
      name:'getUserInfo',
      data:{},
      success(res){
        console.log(res)
        self.globalData.userInfoFromCloud = res.result.storeUser
      }
    })
  },
  globalData: {
    currentGroupInfo: null,
    currentGroupUserList: [],
    currentBill: null,
    userInfo: null,
    shareParam: null,
    billId: '',
    userInfoFromCloud: null,
    userRemark: {}
  }
})
