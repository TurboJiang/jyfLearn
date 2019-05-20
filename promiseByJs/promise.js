// promise的三种状态 resolve reject panding
// 将传进的函数参数实现同步

function MyPromise(callback) {
    var self = this
    var state = null
    //记录resolve的参数
    var param = null

    // 执行传入的**并改变promise对象的状态
    callback(resolve, reject)

    // 定义resolve方法
    function resolve(data) {
        let parmise
        // 改变状态 resolve能抛出东西 promise执行成功
        state = true
        param = data
        nextResolve(asynconFulfilled(param))
        // 此时执行记录onFulfilled
        parmise = asynconFulfilled(param)
        if (parmise === undefined) {
            //如果parmise === undefined 就不能解析parmise.constructor

        }else if(parmise.constructor === self.constructor){
            //等待传递进来的promise对象执行完毕，根据传递进来的promise对象的状态执行resolve||reject
            //注意！！！！param参数是个形参，在then方法的promise中执行
            promise.then(function(param){
                resolve(param)
            },function(param){
                reject(param)
            })
        }else{
            //这是前面的then方法没有返回promise对象
            resolve(promise)
        }
    }
    // 定义reject方法 promise执行失败
    function reject(err) {
        state = false
        param = err
        nextReject(asynconRejected(param))
    }

    // promise没有执行完毕的情况
    var nextResolve = null
    var nextReject = null
    // 记录then方法的参数：onFulfilled,onRejected
    var asynconFulfilled = null
    var asynconRejected = null

    // 在 MyPromise上绑定一个.then方法
    this.then = function (onFulfilled, onRejected) {//onFulfilled,onRejected是两个函数
        //如何将自己的promise拿来用？
        // 返回一个新的promise 对象
        return new self.constructor(function (resolve, reject) {
            // promise执行成功与否？=== resolve是否实现？
            if (state === true) {//为true 表示reslove实现了
                // param 是promise对象完成后的结果
                resolve(onFulfilled(param))
            } else if (state === false) {
                reject(onRejected(param))
            } else {//promise没有执行完毕
                nextResolve = resolve
                nextReject = reject
                asynconFulfilled = onFulfilled
                asynconRejected = onRejected
            }
        })
    }
}