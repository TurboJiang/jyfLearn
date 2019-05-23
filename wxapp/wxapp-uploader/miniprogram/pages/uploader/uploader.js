// 实例化应用
const app = getApp()

Page({
  data: {
    files: []
  },
  chooseImage() {
    let that = this
    // 微信小程序挑选图片
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        console.log(res)
        // 修改数据源 将选中的图片放上页面
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        })


        // 使用循环可以上传多张图片
        for (let i = 0; i < res.tempFilePaths.length; i++) {
          const filePath = res.tempFilePaths[i]//要上传的资源路径
          // 获取每一张图片的名字解决重名问题
          let a = filePath.lastIndexOf('.')
          let b = filePath.lastIndexOf('.', a - 1)
          let c = filePath.substring(b + 1, a)
          // 会出现重名问题myImage 默认是同一张图片
          const cloudPath = c + filePath.match(/\.[^.]+?$/)//可在字符串内检索指定的值或找到一个或多个正则表达式的匹配
          wx.cloud.uploadFile({//一次只能上传一张图片
            filePath,
            cloudPath,
            success(res) {
              console.log('上传成功', res)
            },
            fail(err) {
              console.log('上传失败', err)
            }
          })
        }
        // 小程序 上传文件保存到云服务器中

      }
    })
  },
  previewImage(e) {
    console.log(e)
    // 点击预览图片
    wx.previewImage({
      current: e.currentTarget.id,
      // 图片列表 每张被选中的图片都被存进了files
      urls: this.data.files
    })
  }
})