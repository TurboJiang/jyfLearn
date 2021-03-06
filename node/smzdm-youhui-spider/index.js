const request = require('request');
const cheerio = require('cheerio');

request('https://www.smzdm.com/youhui/', (err, res) => {
    if (!err) {
        console.log(res.body);
        // decodeEntities要不要解析html entity
        // entity 空格 &nbsp; < &lt; > &gt;
        const $ = cheerio.load(res.body, { decodeEntities: false })
        // 该节点下的所有东西遍历出来
        $('.list.list_preferential').each(function () {
            // .html() == innerHTML
            let title = $('.itemName a', this).html();
            // 符合规则替换为空格 <span>44元</span> .*可以为所有东西
            title = title.replace(/<.*>.*<\/.*>/g, '');
            // 第二个参数 限制前面的选择器在哪个区域内
            const price = $('.listTitle .red', this).text();
            const img = $('.picLeft img',this).attr('src');
            const desc = $('lrInfo', this).text().trim();
            console.log({title, price,img,desc})
        })
    }
})