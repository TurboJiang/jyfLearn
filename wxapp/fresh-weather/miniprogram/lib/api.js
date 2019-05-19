// 用于封装



const QQ_MAP_KEY = 'ZSBBZ-TAEKP-MO2DN-VIWKU-WBDP5-YZBAE'
// 初始化云函数
wx.cloud.init({
    env: 'jiangyefang-ee4833',
})
// 获取服务器的句柄
const db = wx.cloud.database()

// 添加心情
export const addEmotion = (openid, emotion) => {
    return db.collection('diary').add({
        data: {
            openid,
            emotion,
            tsModifier: Date.now()
        }
    })
}

// 获取位置  传经纬度 传回调函数
export const geocoder = (lat, lon, success = () => { }, fail = () => { }) => {
    return wx.request({
        url: 'https://apis.map.qq.com/ws/geocoder/v1/',
        data: {
            location: `${lat},${lon}`,
            key: QQ_MAP_KEY,
            get_poi: 0
        },
        // 执行传进来的回调函数
        success,
        fail
    })
}

// 获取天气
export const getWeather = (lat, lon) => {
    return wx.cloud.callFunction({
        name: 'he-weather',
        data: {
            lat,
            lon
        }
    })
}

// 往数据库中查询到用户的openId和具体的时间段，然后获取信息
export const getEmotionByOpenidAndDate = (openid, year, month) => {
    // db.command 查询数据
    const db = db.command
    year = parseInt(year)
    month = parseInt(month)
    let start = new Date(year, month - 1, 1).getTime()
    let end = new Date(year, month, 1).getTime()
    return db.collection('diary').where({
        openid,
        tsModifier: _.gte(start).and(_.lt(end))
    }).get()
}

export const jscode2session = (code) => {
    return wx.cloud.callFunction({
        name:'jscode2session',
        data:{
            code
        }
    })
}