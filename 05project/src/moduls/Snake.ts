class Snake{
    //蛇的容器snake
    snakeEle:HTMLElement
    //定义一个蛇头部的元素
    head:HTMLElement
    //蛇的身体（包括蛇的头部）
    bodies:HTMLCollection;

    constructor(){
        this.snakeEle = document.getElementById('snake')!
        this.head = document.querySelector('#snake>div') as HTMLElement;
        this.bodies = this.snakeEle.getElementsByTagName('div');
    }
    //获取蛇头坐标
    get X(){
        return this.head.offsetLeft
    }
    get Y(){
        return this.head.offsetTop
    }
    //设置蛇头坐标
    set X(value){
        if(value===this.X){
            return;
        }
        //判断是否撞墙
        if(value<0 || value>290){
            //则蛇死了
            throw new Error('蛇撞墙了')
        }
        //不能左右掉头
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft ===value){
            console.log('掉头了')
            //如果发生了，让蛇继续反方向继续移动
            if(value>this.X){
                value = this.X - 10
            }else{
                value = this.X + 10
            }
        }

        this.moveBody()
        this.head.style.left = value + 'px'
        this.checkHeadBody()
    }
    set Y(value){
        if(value===this.Y){
            return;
        }
        //判断是否撞墙
        if(value<0 || value>290){
            //则蛇死了
            throw new Error('蛇撞墙了')
        }
        //不能shangxia 掉头
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop ===value){
            console.log('掉头了')
            //如果发生了，让蛇继续反方向继续移动
            if(value>this.Y){
                value = this.Y - 10
            }else{
                value = this.Y + 10
            }
        }
        this.moveBody()
        this.head.style.top = value + 'px'
        this.checkHeadBody()
    }
    //像蛇的容器中添加元素 （添加一节身体
    addBody(){
        //向snakeele中添加一个div insertAdjacentHTML方法将文本html插入
        const ndiv = document.createElement('div')
        ndiv.style.left = (this.bodies[this.bodies.length-1] as HTMLElement).offsetLeft +'px'
        ndiv.style.top = (this.bodies[this.bodies.length-1] as HTMLElement).offsetTop +'px'
        this.snakeEle.appendChild(ndiv)
    }

    //添加一个移动身体的方法
    moveBody(){
        //将后面的身体设置为前面身体的位置
        /**
         * 4->3
         * 3->2
         * 2->1
         */
        for(let i = this.bodies.length-1;i>0;i--){
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;
            (this.bodies[i] as HTMLElement).style.left = X+'px';
            (this.bodies[i] as HTMLElement).style.top = Y+'px';
        }

    }

    //检查头与身体是否相撞
    checkHeadBody(){
        for(let i=1;i<this.bodies.length;i++){
            let bd = this.bodies[i] as HTMLElement;
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
                throw new Error('撞到自己了~~')
            }
        }
    }
}

export default Snake;