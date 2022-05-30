"use strict";
(() => {
    class Person {
        constructor(name, age) {
            this.name = name;
            this._age = age;
        }
        //定义一个方法把 private 修饰的变量暴漏出去，使其可以访问
        getName() {
            return this.name;
        }
        //定义一个方法修改private 修饰的变量
        setName(value) {
            this.name = value;
        }
        //TS中另外一个get set语法糖
        get age() { return this._age; }
        set age(value) {
            if (value > 0) {
                this._age = value;
            }
            else {
                throw new Error('年龄不可以为负数');
            }
        }
    }
    const per = new Person('悟空', 18);
    //属性可以随意修改
    console.log(per.age);
    per.age = -22;
    //private修饰的属性无法修改，且只能通过类内部提供的方法getName()访问
    //per.name = 'ss'
    console.log(per.getName());
    per.setName('新名字');
    //简便写法，等价于class Person
    class C {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const obj = new C('zhangsan', 12);
    console.log(obj);
})();
