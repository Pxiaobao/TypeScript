(()=>{
    //以abstract开头的类是抽象类
    //抽象类不能用来创建对象，是专门用来被继承的类
    abstract class Animal{
        name:string
        age:number
        constructor(name:string,age:number){
            this.name = name
            this.age = age
        }

        //定义一个抽象方法，抽象方法使用abstract开头 没有方法体
        //子类也不可以通过super关键字调用抽象方法
        //抽象方法只能定义在抽象类中，子类 "必须" 对抽象方法进行重写
        abstract bark():void
    }

    class Dog extends Animal{
       //子类必须对父类的抽象方法进行重写
        bark(){
            console.log(this.name+'汪汪汪！')
        }
    }
    const xiaoA = new Dog('xiaoA',18)
    console.log(xiaoA)
    xiaoA.bark()

})()