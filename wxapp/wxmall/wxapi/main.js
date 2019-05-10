// API模块
// book.douban.com movie.douban.com 碰到不同的子域名
const API_BASE_URL = 'https://api.it120.cc';
const CONFIG = require('./config.js');

const request = (url, needSubDomain, method, data) => {
    let _url = API_BASE_URL + (needSubDomain ? '/' + CONFIG.subDomain : '') + url;
    return new Promise((resolve, reject) => {
        wx.request({
            url:_url,
            method:method,
            data:data,
            header:{//数据有时需要带查询参数
                // 需要发送请求，告诉后端， 压缩编码之后的表单数据 更加安全
                'Content-type':'application/x-www-form-urlencoded'//内容类型
            },
            success(request) {
                resolve(request.data)
            },
            fail(error) {
                reject(error)
            }
        })
    });
}

module.exports = {
    loadGoods: (data) => { 
        // 地址 是否需要查询参数 方式 数据
        return request('/shop/goods/list',true,'post',data);
    },
    getBanners: (data) => {
        return request('/banner/list',true,'get',data);
    },
    getCategory: () => {
        return new Promise()
    }
}