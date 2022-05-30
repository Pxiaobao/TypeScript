(()=>{
    class Person {
        //TS可以在属性前添加属性修饰符
        //public 修饰的属性可以在任意位置访问（修改）
        //private 修饰的属性属于私有属性，只能在类内部访问，外部无法访问
        //protected 修饰的属性只能在当前类和子类中使用，不能再实例对象中访问

        private name:string
        private _age:number;

        constructor(name:string,age:number){
            this.name = name;
            this._age = age
        }
        //定义一个方法把 private 修饰的变量暴漏出去，使其可以访问
        getName(){
            return this.name
        }
        //定义一个方法修改private 修饰的变量
        setName(value:string){
            this.name = value
        }


        //TS中另外一个get set语法糖
        get age(){return this._age}
        set age(value){
            if(value>0){
                this._age = value
            }else{
                throw new Error('年龄不可以为负数')
            }
            
        }
    }

    const per = new Person('悟空',18)
    //属性可以随意修改
    console.log(per.age)
    per.age = -22
    //private修饰的属性无法修改，且只能通过类内部提供的方法getName()访问
    //per.name = 'ss'

    console.log(per.getName())
    per.setName('新名字')


    //简便写法，等价于class Person
    class C{
        constructor(public name:string,public age:number){

        }
    }
    const obj = new C('zhangsan',12)
    console.log(obj)


})()