// 每个对象实现同样的方法=>接口

// 对象 林志玲 gaodeMap
const googleMap = {
    show() { //== show:function(){}
        console.log('开始渲染Google地图');
    }
}
const baiduMap = {
    show() {
        // 为互换做准备
        console.log('开始渲染Baidu地图');
    }
}
const gaodeMap = {
    show() {
        // 为互换做准备
        console.log('开始渲染Gaode地图');
    }
}
const sosoMap = {
    show() {
        // 为互换做准备
        console.log('开始渲染Soso地图');
    }
}


// const renderMap = (type) => {
//     // 实现百度和谷歌调用 一次只能调用一个 ===>传参
//     // 缺点：分支太多
//     if (type === 'baidu') {
//         baiduMap.show();
//     }
//     else if (type === 'google') {
//         googleMap.show();
//     } else if (type === 'gaode') {
//         gaodeMap.show();
//     }
// }
// renderMap('baidu');
// renderMap('google');
// renderMap('gaode');


/**
 * @param {object} map
 */
const renderMap = (map) => {
    // 做检测 map 判断是否为函数 typeof 'function'  instanceof Function(所有函数都是Function的实例)
    // if (map.show() && typeof map.show ==='function') {
    //     map.show();
    // }
    if(map.show() && map.show instanceof Function){
        map.show();
    }

}
renderMap(baiduMap);
renderMap(googleMap);
renderMap(sosoMap);
renderMap(gaodeMap);