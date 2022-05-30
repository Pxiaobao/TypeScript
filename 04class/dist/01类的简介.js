"use strict";
//使用class关键字来定义类
class Person {
    constructor(name, age) {
        //设置只读属性只可以读取，不可以修改
        this.ro = '这是不可改的';
        this.name = name;
        this.age = age;
    }
    //定义实例方法
    sayHello() {
        console.log('大家好');
    }
    //定义类方法 可以直接通过类名.方法名使用
    static sayHi() {
        console.log('Hi');
    }
}
//在属性前加static关键字可以定义类（静态）属性，类属性可以直接访问 不需要通过对象
Person.className = '人';
const person1 = new Person('悟空', 18);
console.log(person1);
console.log(Person.className);
