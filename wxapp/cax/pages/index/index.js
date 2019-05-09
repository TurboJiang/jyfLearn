// require es5支持的 node普遍采用的模块化方案 commonjs 
// import .. from 是es6模块方案(用来在开发中分离文件，最后再汇总)
import cax from '../../cax/index'
Page({

  onLoad(options) {
    // 获取设备的宽高
    const info = wx.getSystemInfoSync();
    // console.log(info);
    // canvas绘制了
    const stage = new cax.Stage(info.windowWidth, info.windowHeight, 'myCanvas', this);
    const rect = new cax.Rect(100, 100, {
      fillStyle: 'black'
    });
    // 基点
    rect.originX = 50;
    rect.originY = 50;
    rect.x = 100;
    rect.y = 100;
    // 旋转30度
    rect.rotation = 30;
    // 将角色添加到画布中
    stage.add(rect);

    const button = new cax.Button({ width: 100, height: 40, text: 'I am groot !' });
    button.x = 20;
    button.y = 170;
    stage.add(button);

    const bitmap = new cax.Bitmap('/images/wx.png');
    // 添加点击事件
    bitmap.on('tap', () => {
      console.log('bitmap tap');
    });
    stage.add(bitmap);

    const sprite = new cax.Sprite({
      framerate: 7,
      imgs: ['/images/mario-sheet.png'],
      frames: [
        // 每一帧 x，y轴0 宽高32...
        [0, 0, 32, 32],
        [32 * 1, 0, 32, 32],
        [32 * 2, 0, 32, 32],
        [32 * 3, 0, 32, 32],
        [32 * 4, 0, 32, 32],
        [32 * 5, 0, 32, 32],
        [32 * 6, 0, 32, 32],
        [32 * 7, 0, 32, 32],
        [32 * 8, 0, 32, 32],
        [32 * 9, 0, 32, 32],
        [32 * 10, 0, 32, 32],
        [32 * 11, 0, 32, 32],
        [32 * 12, 0, 32, 32],
        [32 * 13, 0, 32, 32],
        [32 * 14, 0, 32, 32]
      ],
      animations: {
        walk: {
          frames: [0, 1]
        },
        happy: {
          frames: [11, 12, 13, 14]
        },
        win: {
          frames: [7, 8, 9, 10]
        }
      },
      currentAnimation: 'win'
    })

    sprite.x = 100;
    sprite.y = 100;
    stage.add(sprite);

    // 得到下一次的对象 去到x值为200的位置 在2000ms之后 以easing.alasticInOut的方式(弹簧式)
    cax.To.get(rect).to().x(200, 2000, cax.easing.elasticInOut).start();
    setInterval(() => {
      stage.update();
    });
  }
})