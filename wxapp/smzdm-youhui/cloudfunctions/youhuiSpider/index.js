// 云函数入口文件
const cloud = require('wx-server-sdk')
const request = require('request');
const cheerio = require('cheerio');

cloud.init()


function spiderYouhui() {
  return new Promise((resolve, reject) => {
    request('https://www.smzdm.com/youhui/', (err, res) => {
      if (err) {
        reject(err);
      }
      if (!err) {
        console.log(2)
        // console.log(res.body);
        // decodeEntities要不要解析html entity
        // entity 空格 &nbsp; < &lt; > &gt;
        const $ = cheerio.load(res.body, { decodeEntities: false })
        let list = [];
        // 该节点下的所有东西遍历出来
        $('.list.list_preferential').each(function () {
          // .html() == innerHTML
          let title = $('.itemName a', this).html();
          // 符合规则替换为空格 <span>44元</span> .*可以为所有东西
          title = title.replace(/<.*>.*<\/.*>/g, '');
          // 第二个参数 限制前面的选择器在哪个区域内
          const price = $('.listTitle .red', this).text();
          const img = $('.picLeft img', this).attr('src');
          const desc = $('lrInfo', this).text().trim();
          console.log({ title, price, img, desc })
          list.push({ title, price, img, desc })
        })
        resolve(list)
      }
    })
  })
}
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();
  // await 后面接promise 返回promise resolve时候的值
  // 执行爬虫
  try {
    const youhuiLists = await spiderYouhui();//加了await之后书写书写顺序就是执行顺序
    return {
      code: 200,
      youhuiLists
    }
  } catch (err) {
    return {
      code: 500
    }
  }
}