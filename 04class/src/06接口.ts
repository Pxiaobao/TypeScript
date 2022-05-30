//使用type关键字定义一个对象的结构类型

type myType={
    name:string,
    age:number,
    gender:string
}

const obj:myType={
    name:'s',
    age:1,
    gender:'s'
}

//类似的 使用interface关键字定义类的结构，应该包含哪些属性和方法
//接口也可以当成类型声明去使用
//接口中方法都是抽象方法，不可以写方法体
//总的来说 接口即是对类的限制 ， 类要满足接口的要求才可以定义
interface myinterface{
    name:string,
    age:number,
    gender:string,
    sayhello():void
}


const ifs:myinterface={
    name:'s',
    age:1,
    gender:'s',
    sayhello(){
        console.log('hello')
    }
}
//定义类时，可以使类去实现一个接口，即使类满足接口的要求
class ifs1 implements myinterface{
    name:string
    age:number
    gender:string
    constructor(name:string,age:number,gender:string){
        this.name = name
        this.age = age
        this.gender = gender
    }
    sayhello(){
        console.log('hello')
    }
}