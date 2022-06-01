
//定义食物类
class Food{
    //定义一个属性表示食物对应的元素
    element:HTMLElement;
    constructor(){
        //获取页面中的food元素并将其赋值给element，
        //！表示断言 这个不为空 不会报错，如果不加！的话，TS会判断不一定拿得到Fidw为food的元素
        this.element = document.getElementById('food')!;

    }
    //定义一个获取食物X轴坐标的方法
    get X(){
        return this.element.offsetLeft
    }
    //定义一个获取食物Y轴坐标的方法
    get Y(){
        return this.element.offsetTop
    }

    //修改食物位置的方法,生成一个随机的位置
    //left 为0-290之间，且要为10的倍数
    //
    change(){
        const left = Math.round(Math.random()*29)*10
        const top = Math.round(Math.random()*29)*10
        this.element.style.left = left +'px'
        this.element.style.top = top +'px'
    }
}
//测试Food类
// const food = new Food()
// console.log(food.X,food.Y)
// food.change()
// console.log(food.X,food.Y)

export default Food;
