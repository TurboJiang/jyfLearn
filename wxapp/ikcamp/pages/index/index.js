import util from '../../utils/index'
import config from '../../utils/config'
let app = getApp()
// 判断是开发环境还是生产环境
let isDEV = config.isDev

let handler = {
  data: {
    page: 1,
    days: 3,
    pageSize: 4,
    totalSize: 0,
    hasMore: true,
    articleList: [],
    default: config.defaultImg,
    // 页面加载完后loading出现成功拿到接口资源后隐藏掉loading
    hiddenLoading: false
  },
  onLoad() {
    this.requestArticle()
  },
  requestArticle() {
    util.request({
      url: 'list',
      mock: true,
      data: {
        tag: '微信热门',
        start: this.data.page || 1,
        days: this.data.day || 3,
        pageSize: this.data.pageSize || 4,
        langs: config.appLang || 'en'
      }
    }).then((res)=> {
        console.log(res);
})//拿到util中request方法
  }
}
Page(handler)
  