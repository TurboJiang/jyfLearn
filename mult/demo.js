// 缺点:全局变量太多，cache职位mult服务，会造成对空间的污染
// var cache={};
// const mult=()=>{

// }

// 普通函数里面的变量在运行之后会销毁==>使用闭包：在立即执行函数中return一个函数
const mult=(function(){
    var cache={};
    return function(...args){
        let key=Array.prototype.join.call(arguments,',');
        if(key in cache){
            return cache[key];
        }
        let a=1;
        for(let i=0;i<args.length;i++){
            a= a* args[i];
        }
        cache[key]=a;
        return a;
    }
})()
console.log(mult(1,2,3));