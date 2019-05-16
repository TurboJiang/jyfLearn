//index.js
//获取应用实例
const app = getApp()
const GameManager = require('./game_manager')

Page({
  data: {
    score: 0,
    highscore: 0,
    grids: []
  },
  gameManager: null,
  onLoad: function () {
    // 绘制4*4网格
    this.gameManager = new GameManager(4);
    // 启动
    this.setData({
      grids: this.gameManager.setup()
    })
  }
})
