const https = require('https');
const fs = require('fs');
const path = require('path');
// cheerio相当于服务端的$ query
const cheerio = require('cheerio');
const url = 'https://movie.douban.com/top250';
// 保存图片的目录
const imageDir = './images/';
// 爬取每一页的方法
function spiderMovies(start) {
    https.get(url + `?start=${start}`, (res) => {
        res.setEncoding('utf-8');
        let html = '';
        // 源源不断收到数据 每收到一次数据就触发一次data事件
        res.on('data', (chunk) => {
            html += chunk
            // console.log(chunk);
        });
        // 数据发完了
        res.on('end', () => {
            // 数据发送完毕 可以获取到完整的可以用的html
            const $ = cheerio.load(html);
            let movies = [];
            $('.item').each(function () {
                // this 在哪个作用域下查找 - 每一部电影
                // 默认是全局时每次都只查找第一张图片
                const picUrl = $('.pic a img', this).attr('src');
                const title = $('.title', this).text();

                const star = $('.info .star .rating_num', this).text();
                // 入库
                const link = $('a', this).attr('href');
                const movie = {
                    title,
                    star,
                    link,
                    picUrl
                }
                movies.push(movie);
                console.log(picUrl)
                // 下载图片
                downloadImg(picUrl);
            })
            // 在文件名上标识一下 数据页数
            saveLocalData(start / 25, movies);
        })
    })
}

const dataDir = './moviesData/'
function saveLocalData(page,movies) {
    // 文本信息
    fs.writeFile(dataDir + `data${page}.json`, JSON.stringify(movies), (err) => {
        if (!err) {
            console.log('数据保存成功')
        } else {
            console.log(err)
        }
    })
}
// 将文件写进磁盘
function downloadImg(picUrl) {
    https.get(picUrl, (res) => {
        res.setEncoding('binary');//文件内容格式对应二进制，文本内容对应utf-8
        let imageData = '';
        res.on('data', (chunk) => {
            imageData += chunk;
        })
        // 将数据保存进文件
        res.on('end', () => {
            fs.writeFile(imageDir + path.basename(picUrl), imageData, 'binary', (err) => {
                if (!err) {
                    console.log('image downloding', path.basename(picUrl));
                }
            });
        })
    })
}

// es6 generate 函数
function* doSpider(x) {
    let start = 0;
    while (start < x) {
        yield start

        spiderMovies(start);
        start += 25;
    }
}
for (let x of doSpider(250)) {
    console.log('爬取', x)
}