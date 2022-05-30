"use strict";
function fn(a) {
    return a;
}
/*
在定义函数或者类时，如果遇到类型不明确就可以使用泛型
T类型
*/
function fn1(a) {
    return a;
}
//不指定类型的时候 ts会自动判断类型
console.log(fn1(10));
//可以在调用的时候 指定类型
console.log(fn1('hello'));
function fn2(a, b) {
    return a;
}
//不指定类型的时候 ts会自动判断类型
console.log(fn2(10, 's'));
//可以在调用的时候 指定类型
console.log(fn2('hello', 12));
//参数要符合接口myinter
function fn3(a) {
    return a.name;
}
//这时候传递的参数就要符合接口所定义的类型，必须要有name属性
fn3({ name: 'ss' });
//在类中使用泛型
class Myclass {
    constructor(name) {
        this.name = name;
    }
}
const a = new Myclass('张三');
