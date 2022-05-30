"use strict";
//使用type关键字定义一个对象的结构类型
const obj = {
    name: 's',
    age: 1,
    gender: 's'
};
const ifs = {
    name: 's',
    age: 1,
    gender: 's',
    sayhello() {
        console.log('hello');
    }
};
//定义类时，可以使类去实现一个接口，即使类满足接口的要求
class ifs1 {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    sayhello() {
        console.log('hello');
    }
}
