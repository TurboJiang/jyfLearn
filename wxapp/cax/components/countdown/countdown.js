// components/countdown/countdown.js
Component({

  properties: {
    start: {
      type: Boolean,
      value: false,
      // 可以观察外界传进的start的变化
      observer(newVal) {
        console.log(newVal, '-------');
        if (newVal === true) {
          this.countdownFunc();
        }
      }
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    timerText: '获取验证码'
  },
  /**
   * 生命周期函数--监听页面加载
   */
  /**
  * 组件的方法列表
  */
  methods: {
    _setStartDataEvent:function(){
      this.triggerEvent('setStartDataEvent',{
        start:this.data.start
      });
    },
    countdownFunc: function () {
      this.setData({
        timerText: 3
      });
      // 读取数据 不影响刷新
      let countdownNum = this.data.timerText;
      let timer = setInterval(() => {
        countdownNum--;
        this.setData({
          timerText: countdownNum
        });
        if (countdownNum === 0) {
          this.setData({
            timerText: '重新发送',
            start: false
          })
          clearInterval(timer);
          this._setStartDataEvent();
        }
      }, 1000)
    }
  }

})