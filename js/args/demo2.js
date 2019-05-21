// 解构的作用是可以快速取得数组或对象当中的元素或属性，而无需使用arr[x]或者obj[key]等传统方式进行赋值

// {} 解构 用一个大括号将其按照一个大对象解构出来
// userObj一个参数带来了新的问题：代码的函数编写者，对于user中的key要去了解
// 当参数只占user一部分时，解构可以帮助提高代码的可读性

function information({name,age,height}){
    console.log(name,age,height)
}
const user = {
    name:'刘昊然',
    age:22,
    height:1.84,
    sex:'男',
    hobby:['play games']
}
console.log(information(user))