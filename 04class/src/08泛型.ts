function fn(a:any):any{
    return a
}
/*
在定义函数或者类时，如果遇到类型不明确就可以使用泛型
T类型
*/
function fn1<T>(a:T):T{
    return a
}
//不指定类型的时候 ts会自动判断类型
console.log(fn1(10))
//可以在调用的时候 指定类型
console.log(fn1<string>('hello'))


function fn2<T,K>(a:T,b:K):T{
    return a
}
//不指定类型的时候 ts会自动判断类型
console.log(fn2(10,'s'))
//可以在调用的时候 指定类型
console.log(fn2<string,number>('hello',12))

//先通过接口定义好要实现的类型
interface myinter{
    name:string
}
//参数要符合接口myinter
function fn3<T extends myinter>(a:T){
    return a.name
}
//这时候传递的参数就要符合接口所定义的类型，必须要有name属性
fn3({name:'ss'})


//在类中使用泛型
class Myclass<T>{
    name:T;
    constructor(name:T){
        this.name = name
    }
}

const a = new Myclass<string>('张三')