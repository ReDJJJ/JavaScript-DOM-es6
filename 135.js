function myModule(){
    var money = 100;
         function checkMyMoney(){
             console.log(money);
         }
         function setMyMoney(number){
             money = money + number;
             console.log(money);
         }
         function getMyMoney(number){
             money = money - number;
             console.log(money);
         }
        //  return {
        //      money: money, //由于每次生成闭包时,myModule只调用一次,该money返回100,哪怕myModule内部变量money变了,return{}对象中的money值也不会变,因为定死了,想要查询money的实际情况,需要定义check函数查看money
        //      check : checkMyMoney,
        //      set : setMyMoney,
        //      get : getMyMoney,
        //  }
          //将myModule()所有内部函数的地址打包成对象,当作返回值,这个对象的地址赋予给一个全局变量obj,至此,这个自定义模组就打包完成了;
          //以上满足了闭包: 函数嵌套 内部调用外部数据 外部调用内部调用或者引用 ,并且该闭包若想一直生存,需要一个全局变量指向其中的内部函数;

         window.setMyMoney = setMyMoney;
         window.checkMyMoney = checkMyMoney;
         window.getMyMoney = getMyMoney;
         //在window中添加方法,把内部函数的地址传给window的属性;
         //内部函数被引用了,达成闭包生存机制,全局变量指向了内部函数;
         //会污染外部命名空间,因为添加了全局变量,越来越少用了,一般用 第一种封装成对象返回



         //抽象出来的自定义模块
         /*
            外部函数(){
                私有变量等
                内部函数1(){
                    使用私有变量的代码块
                }
                内部函数2(){
                      使用私有变量的代码块
                }
                内部函数3(){
                      使用私有变量的代码块
                }
                return {
                    内部函数1:内部函数1名(地址)
                    内部函数2:内部函数2名(地址)
                    内部函数3:内部函数3名(地址)
                }
                
                或者
                window.属性名1 = 内部函数1名
                ....
            }
         
         */
}