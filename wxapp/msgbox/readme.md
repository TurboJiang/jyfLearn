- 组件思维
    弹窗组合了一些标签 形成了独立的弹窗功能
    在其他页面中也要用到，组合成一个独立的组件
    <dialog />
    页面是由组件拼装而成。

    - 组件语法
        同于Page 又有异
        Components({
            data:{},
            properties:{
                <!-- 属性类型定义 -->
                title:{
                    type:String,
                    value:'标题'
                }
            },
            methods:{
                
            }
        })

- bind 与 tap 区别：点击事件
    bindtap  向外冒泡 沿路经过到page都会触发这个事件
    catch:tap  不会向外