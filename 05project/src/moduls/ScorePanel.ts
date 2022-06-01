//定义表示记分牌的类
class ScorePanel{
    //声明和赋值同时进行，ts会自动判断类型
    score = 0;
    level = 1;
    //分数和等级所在的元素，在构造函数中进行初始化
    scoreEle:HTMLElement;
    levelEle:HTMLElement;
    //也可以直接在这里进行初始化
    // scoreEle:HTMLElement = document.getElementById('score')!;
    // levelEle:HTMLElement = document.getElementById('level')!;

    //设置一个变量限制等级,默认值为10（在构造函数中设置）
    maxLevel:number;
    upScore:number;

    constructor(maxLevel:number=10,upScore:number=10){
        this.scoreEle = document.getElementById('score')!
        this.levelEle = document.getElementById('level')!
        this.maxLevel = maxLevel;
        this.upScore = upScore;

    }
    //设置一个加分的方法
    addScore(){
        this.score++
        this.scoreEle.innerHTML = this.score + ''
        //判断分数是多少,每10分升一级
        if(this.score%this.upScore === 0){
            this.levelUp()
        }
    }
    //设置一个提升登记的方法
    levelUp(){
        //设置最高等级10级
        if(this.level<this.maxLevel){
            //一行代码和上面方法中两行代码效果一样
            this.levelEle.innerHTML = ++this.level + ''
        }
    }
}
export default ScorePanel;