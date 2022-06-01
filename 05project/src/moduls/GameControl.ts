//引入其他的类
import Snake from "./Snake";
import ScorePanel from "./ScorePanel";
import Food from "./Food";
//游戏控制器，控制其他所有类
class GameControl{
    //定义三个属性
    snake:Snake;
    food:Food;
    scorePannel:ScorePanel;
    //创建一个属性来存储蛇的移动方向
    direction:string = '';
    //创建一个属性来记录游戏是否结束
    isAlive:boolean = true;



    constructor(){
        this.snake = new Snake()
        this.food = new Food()
        this.scorePannel = new ScorePanel()

        //创建对象的时候即初始化，开始游戏
        this.init()
    }
    //游戏初始化的方法
    init(){
        //绑定一个键盘按下事件,需要bind this，否则keydownHandler中的this会指向调用它的document对象
        document.addEventListener('keydown',this.keydownHandler.bind(this))
        this.run()
    }

    //创建一个键盘按下的相应函数
    keydownHandler(event:KeyboardEvent){
        //监测按键是否合法

        this.direction = event.key
        
    }

    //控制蛇移动的方法
    run(){
        /*
        根据方向（this.direction）改变蛇的位置
        */
        let X = this.snake.X;
        let Y = this.snake.Y;
        //根据按键修改
        switch(this.direction){
            case "ArrowUp":
                Y-=10;
                break;
            case "ArrowRight":
                X+=10
                break;
            case "ArrowDown":
                Y+=10
                break;
            case "ArrowLeft":
                X-=10
                break;

       }
       try{
        this.snake.X = X;
        this.snake.Y =Y;
        
        this.checkEat(X,Y)
       }catch(e){
        alert((<any>e).message+"Game Over")
        this.isAlive = false
       }
       
       //开启一个定时器循环调用
       this.isAlive && setTimeout(this.run.bind(this),300-(this.scorePannel.level-1)*30)
    }
    //监测一个蛇是否吃到食物
    checkEat(X:number,Y:number){
        if(X === this.food.X && Y === this.food.Y){
            //食物位置重置
            this.food.change()
            //分数增加
            this.scorePannel.addScore()
            //蛇增加一节
            this.snake.addBody()
        }
    }
}
export default GameControl;