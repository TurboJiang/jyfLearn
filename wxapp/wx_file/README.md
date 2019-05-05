云开发是腾讯云在大力推广的
快速上手

- 云开发提供可视化的mongodb云数据库
    连接数据库 const db = wx.cloud.database();
    再选择表 const userInfo = wx.collection('userInfo')  添加一个集合
    支持直接存JSON
    后端即服务 增删改查操作 CRUD
    add()

    要做列表 先建collection add 再get

    where({}) 条件查询 count()满足条件的条数 检验数据库中是否存在 ，存在则不存 不存在则添加