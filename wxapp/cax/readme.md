小程序 canvas 找cax
引入 cax组件
new cax.Stage()
cax.Rect
add + update

#countdown 组件
- 有一个文案  获取验证码？ 点击之后开始计时 开始切换到下一个状态 start false|true
Page为组件的调用者（由组件构成页面）properties 由外向内传递数据
组件  data(内部) + properties(外界传入)
<countdown start="{{start}}"/>为何要传进start？不是默认为false嘛？

- properties属性 有一个observer选项 当外界选的值改变时，会执行
  组件是构成页面的，是为页面打工的


- start 由外传入内是properties有利于页面操作关键状态 由外到内通过properties已经搞定
    内部组件通知页面？