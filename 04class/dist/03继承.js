"use strict";
(() => {
    class Animal {
        //constructor 为构造函数，会在对象创建时调用
        constructor(name, age) {
            //在实例方法中 this表示当前的实例，在构造函数中指新建的那个对象
            //可以通过this向新建的对象中添加属性
            this.name = name;
            this.age = age;
        }
        bark() {
            console.log(this.name + '动物叫');
        }
    }
    class Dog extends Animal {
        //对父类方法的重写
        bark() {
            console.log(this.name + '汪汪汪！');
        }
        //新增了父类中的方法
        run() {
            console.log(this.name + '跑跑跑！');
        }
    }
    const xiaoA = new Dog('xiaoA', 18);
    console.log(xiaoA);
    xiaoA.bark();
    class Cat extends Animal {
        bark() {
            console.log(this.name + '喵喵喵！');
        }
    }
    const xiaoB = new Cat('xiaoB', 18);
    console.log(xiaoB);
    xiaoB.bark();
})();
