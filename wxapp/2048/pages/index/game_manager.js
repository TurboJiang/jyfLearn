// 主模块

// 引入Grid模块
const Grid = require('./grid.js');

function GameManager(size, startTiles = 2) {
    this.size = size;
    this.startTiles = startTiles;
}
// 游戏启动方法
GameManager.prototype = {
    setup: function () {
        // 游戏开始前生成一个网格
        this.grid = new Grid(this.size);
        // 随机在页面上添加一个数字
        this.addStartTiles();
        // 获取到二维数组
        return this.grid.cells;
    },
    // 添加方块
    addStartTiles: function () {
        // 有几块就调用几次
        for (let i = 0; i < this.startTiles; i++) {
            this.addRandomTiles();
        }
    },
    addRandomTiles: function () {
        // 添加方块
        // 1.位置 2.数值

        const value = Math.random() < 0.9 ? 2 : 4;

        // grid有数据
        const position = this.grid.randomAvailableCell();
    }
}
module.exports = GameManager;