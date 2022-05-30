let a:number = 10
console.log('hello'+a)
let b = false;
function sum(a:number,b:number):number{
    return a+b
}


let d:any;
d = 'sss'
b = d;
console.log(b)
//函数返回string或者让boolean
function fn(num:number):string|boolean{
    if(num>0){
        return true 
    }else{
        return '123'
    }
    
}
//void 用来表示空，表示函数没有返回值
function fn1(num:number):void{

}
//never表示永远不会返回结果
function fn2():never{
    throw new Error('报错了')
}

let box1 = document.getElementById("box1")
box1?.addEventListener("click",()=>{
    alert('hello')
})