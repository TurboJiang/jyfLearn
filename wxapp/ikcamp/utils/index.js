import config from './config'
import * as Mock from './mock'

const DEFAULT_REQUEST_OPTIONS = {
  url: '',
  data: {},
  header: {
    "Content-Type": "application/json"
  },
  method: "GET",
  dataType: "json"
}
// 封装
let util = {
  isDev: config.isDev,
  // 封装console.log方法
  log() {
    this.isDev && console.log(...arguments)
  },
  // 封装崩之后的提示 wx.showModal
  alert(title = "提示", content = config.defaultAlertMessage) {
    if ('object' === typeof content) {
      // this.isDiv返回booleaan值 true：JSON.stringify(content)  false:config.defaultAlertMessage
      content = this.isDev && JSON.stringify(content) || config.defaultAlertMessage
    }
    wx.showModal({
      title: title,
      content: content
    })
  },
  // 缓存机制 storageData
  getStorageData(key, cb) {
    let self = this
    wx.getStorage({
      key: key,
      success(res) {
        cb && cb(res.data)
      },
      fail(err) {
        let msg = err.errMsg || '';
        if (/getStorage:fail/.test(msg)) {
          self.getStorageData(key)
        }
      }
    })
  },
  setStorageData(key, value = '', cb) {
    wx.setStorage({
      key: key,
      data: value,
      success() {
        cb && cb();
      }
    })
  },
  request(opt) {
    // let url = opt.url
    let { url, data, header, method, dataType, mock = false } = opt
    let self = this
    return new Promise((resolve, reject) => {
      if (mock) {
        let res = {
          statusCode : 200,
          // 取出mock对象中的url出来
          data: Mock[url]
        }
        // 均存在说明本地的假数据都取到了 本地的mock接口请求成功
        if (res && res.statusCode === 200 && res.data) {
          resolve(res.data)
        } else {
          self.alert('提示', res)
          reject(res)
        }
      } else {
        wx.request({
          url: url,
          data: data,
          header: header,
          method: method,
          dataType: dataType,
          // success:function(res){}
          success: (res) => {
            if (res && res.statusCode === 200 && res.data) {
              resolve(res.data)
            } else {
              self.alert('提示', res)
              reject(res)
            }
          },
          fail:function(err){
            self.log(err)
            self.alert('提示', res)
              reject(err)
          }
        })
      }
    })
  }
}
export default util