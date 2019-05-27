// 标签去除 ——> 正则
// 标签中的文本是数据 将文本拿出来，标签不要 
const htmlStr = '<p><em>lorem</em><strong>ipsum</strong></p';
// lorem ipsum strip tags

// 正则查找标签部分 replace替换 splice
//正则规则 项目都有<>标签 []范围匹配 +匹配次数 *贪婪匹配，匹配0次或多次
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');