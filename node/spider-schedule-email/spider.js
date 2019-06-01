const superagent = require('superagent');
const cheerio = require('cheerio');
const ejs = require('ejs');
const fs = require('fs');
const nodemailer = require('nodemailer');

const local = 'jiangsu/qixia-district';
const weatherBaseUrl = 'https://tianqi.moji.com/weather/china/'
// 获取天气信息
const getWeatherData = function () {
    return new Promise((resolve, reject) => {
        // 地址拼接
        superagent.get(`${weatherBaseUrl}${local}`)
            .end((err, res) => {
                if (err) {
                    reject(err);
                    console.log(err);
                    return;
                }
                // console.log(res.text);
                let weatherTip = "";
                let $ = cheerio.load(res.text);
                // 爬取 一个天气感知：weatherTip
                $(".wea_tips").each(function (i, elem) {
                    weatherTip = $(elem)
                        .find("em")
                        .text();
                });
                let threeDaysData = [];
                // 爬取最近三天的天气信息
                $(".forecast .days").each(function (i, elem) {
                    const SingleDay = $(elem).find("li");
                    const Day = $(SingleDay[0]).text().replace(/\s/g, "");
                    const WeatherText = $(SingleDay[1]).text().replace(/\s/g, "");
                    const Temperature = $(SingleDay[2]).text().replace(/\s/g, "");
                    const WindDirection = $(SingleDay[3]).find("em").text().replace(/\s/g, "");
                    const WindLevel = $(SingleDay[3]).find("b").text().replace(/\s/g, "");
                    const Pollution = $(SingleDay[4]).text().replace(/\s/g, "");
                    const PollutionLevel = $(SingleDay[4]).find("strong").attr("class");
                    threeDaysData.push({
                        Day, WeatherText, Temperature, WindDirection, WindLevel,
                        Pollution, PollutionLevel
                    });
                });
                // console.log({ weatherTip, threeDaysData });
                // 将对象resolve出去
                resolve({
                    weatherTip, threeDaysData
                })
            })
    })
}
// 发邮件 sendEmail 定义两端爬虫 处理异步问题
const getOneData = function () {
    //  one app : http://wufazhuce.com/
    const OneUrl = 'http://wufazhuce.com/';
    let p = new Promise(function (resolve, reject) {
        superagent.get(OneUrl).end(function (err, res) {
            if (err) {
                reject(err);
            }
            let $ = cheerio.load(res.text);
            let selectItem = $("#carousel-one .carousel-inner .item");
            let todayOne = selectItem[0];
            let todayOneData = {
                type: $(todayOne)
                    .find(".fp-one-imagen-footer")
                    .text()
                    .replace(/\s/g, ''),
                text: $(todayOne)
                    .find(".fp-one-cita")
                    .text()
                    .replace(/\s/g, '')
            };
            resolve(todayOneData)
        });
    })
    return p
}
// getWeatherData();

// 同时执行两个爬虫 将所有的数据进行聚合
function getAllDataAndSendEmail() {
    Promise.all([getWeatherData(), getOneData()])
        // 可以接收到两个promise resolve的值
        .then(alldata => {
            // 模板引擎
            const [weather, one] = alldata;
            // 将天气以及html一起传送
            sendEmail(weather, one);
            // 将三天的天气信息获取到，之前由于数组原因，未被输出，指数除了[object][object][object]  
            // console.log(weather.threeDaysData);
        })
}
function sendEmail(weather, one) {
    // 把ejs 编译为 html
    const template = ejs.compile(//先将模板编译出来
        fs.readFileSync('./email.ejs', 'utf8')
    )
    // 数据用对象的形式拿出来
    const html = template({
        weatherTip: weather.weatherTip,
        threeDaysData: weather.threeDaysData
    })
    // 设置权限
    const transporter = nodemailer.createTransport({
        service: 'qq',
        port: 465,//smtp端口号:465
        auth: {
            user: '2212761114@qq.com',
            pass: 'lfpvycklpznveabj'
        }
    })
    // 配置发送邮件的具体
    transporter.sendMail({
        from:'J <2212761114@qq.com>',
        to:'1599348650@qq.com',
        subject:'啊邮件',
        html
    },(err,info)=>{
        if(err){
            console.log(err);
            return false;
        }
        console.log('success',info);
    })
}
getAllDataAndSendEmail();