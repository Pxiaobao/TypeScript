(()=>{
    class Animal{
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
            
            console.log(this.name+'动物叫')
        }
    }


    class Dog extends Animal{
        color :string

        constructor(name:string,age:number,color:string){
            //如果在子类中写了构造函数，在子类构造函数中必须对父类进行调用
            super(name,age)
            this.color = color
        }
        //对父类方法的重写
        bark(){
            //在类的方法中 super表示当前类的父类
            super.bark()
            console.log(this.name+'汪汪汪！')
        }
        //新增了父类中的方法
        run(){
            console.log(this.name+'跑跑跑！')
        }
    }
    const xiaoA = new Dog('xiaoA',18,'red')
    console.log(xiaoA)
    xiaoA.bark()


})()