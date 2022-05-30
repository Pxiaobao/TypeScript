"use strict";
(() => {
    //以abstract开头的类是抽象类
    //抽象类不能用来创建对象，是专门用来被继承的类
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    class Dog extends Animal {
        //子类必须对父类的抽象方法进行重写
        bark() {
            console.log(this.name + '汪汪汪！');
        }
    }
    const xiaoA = new Dog('xiaoA', 18);
    console.log(xiaoA);
    xiaoA.bark();
})();
