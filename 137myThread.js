function fibonacci(n){
    if(n<=2){
        return 2;
    }
    return fibonacci(n-1) + arguments.callee(n-2);
}

//子线程的消息接收事件监听
self.onMessage = function(event){
    event = event || window.event;
    console.log(event.data);//打印接收到的数据,数据为主线程postMessage传过来的形参5;
    var result = fibonacci(event.data); //执行耗时代码;

    self.postMessage(result); //返回耗时代码的执行结果
}