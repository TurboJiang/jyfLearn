// 自己的代码自己测
// 工作流中的标准的自测方法可以将代码的正确性99%
// 通过写测试d代码让代码通过测试


// 引入add方法
const { add } = require('../index');
// 再引入测试库 期望代码如约运行
const expect = require('chai').expect;

// 测试代码，describe()描述 it()举例 expect()期待
describe("两数相加结果为和", () => {
    it('两个字符串数相加，应该转变类型后返回其值', () => {
        expect(add("11", "22")).to.equal(33);//期待两值相加和为33
    });
    it("当参数类型错误时，请返回NaN", () => {
        expect(add(0,null)).to.equal(NaN);
    })
});