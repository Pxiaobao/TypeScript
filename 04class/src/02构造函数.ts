class Dog{
    name:string
    age:number
    //constructor 为构造函数，会在对象创建时调用
    constructor(name:string,age:number){
        //在实例方法中 this表示当前的实例，在构造函数中指新建的那个对象
        //可以通过this向新建的对象中添加属性
        this.name = name
        this.age = age
    }
    bark(){
        //alert('汪汪汪！')
        console.log(this.name+'汪汪汪！')
    }
}

const xiaoA = new Dog('xiaoA',18)
const xiaoB = new Dog('xiaoB',13)
console.log(xiaoA)
console.log(xiaoB)
xiaoA.bark()
xiaoB.bark()