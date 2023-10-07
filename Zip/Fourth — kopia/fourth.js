const grid = document.querySelector('.Grid')
const scoreDisplay = document.querySelector('#score')
const containerWidth = 120
const containerHeight = 20
const boardWidth = 565
const boardHeight = 300
const ballDiameter = 20
let timerID;
let xDirection = 2
let yDirection = 2
let score = 0;

const userStart = [230, 10]
let currentPosition = userStart;

const ballStart = [270, 40]
let ballCurrentPosition = ballStart

//Create Block
class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis,yAxis]
        this.bottomRight = [xAxis + containerWidth, yAxis]
        this.topLeft = [xAxis, yAxis + containerHeight]
        this.topRight = [xAxis + containerWidth, yAxis + containerHeight]
    }
}

//All Blocks
const blocks = [
    new Block(10,270),
    new Block(120,270),
    new Block(230,270),
    new Block(340,270),
    new Block(450,270),
    new Block(10,240),
    new Block(120,240),
    new Block(230,240),
    new Block(340,240),
    new Block(450,240),
    new Block(10,210),
    new Block(120,210),
    new Block(230,210),
    new Block(340,210),
    new Block(450,210),
]

console.log(blocks[0]);

function AddBlock() {

    for (let i=0; i<blocks.length; i++)
    {
     
        const container = document.createElement('div')
        container.classList.add('container')
        container.style.left = blocks[i].bottomLeft[0] + 'px'
        container.style.bottom = blocks[i].bottomLeft[1] + 'px'
        grid.appendChild(container)

    }

}

AddBlock()

//add user
const user = document.createElement("div")
user.classList.add('user')
drawUser()
grid.appendChild(user)

//Move User
function MoveUser(e) {
    switch(e.key) {
        case 'ArrowLeft':
            if (currentPosition[0] > 0 ){
        currentPosition[0] -=10
        drawUser()
            }
        break;
        case "ArrowRight":
            
        if (currentPosition[0] < boardWidth - containerWidth)
            {
                currentPosition[0] += 10
                drawUser()
            }
            break;
    }
}


//Draw The User
function drawUser() {
    user.style.left = currentPosition[0] + 'px'
user.style.bottom = currentPosition[1] + 'px'
}

document.addEventListener('keydown', MoveUser)


//Ball

const ball = document.createElement('div')
ball.classList.add('ball')
grid.appendChild(ball)
drawBall()

//Draw the Ball 

function drawBall() {

    ball.style.left = ballCurrentPosition[0] + 'px'
    ball.style.bottom = ballCurrentPosition[1] + 'px'
}

//Move Ball 
function moveBall() {
    ballCurrentPosition[0] += xDirection
    ballCurrentPosition[1] += yDirection
    drawBall()
    Collision()
}

timerID = setInterval(moveBall, 20)

//Collision
function Collision() {


    for (let i=0; i< blocks.length; i++) {
        if (
            (ballCurrentPosition[0] > blocks[i].bottomLeft[0] && ballCurrentPosition[0] < blocks[i].bottomRight[0]) &&
            ((ballCurrentPosition[1] + ballDiameter) > blocks[i].bottomLeft[1] && ballCurrentPosition[1] < blocks[i].topLeft[1])
        ) {
            const allBlocks = Array.from(document.querySelectorAll('.container'))
            allBlocks[i].classList.remove('container')
            blocks.splice(i, 1)
            changeDirection()
            score++
            scoreDisplay.innerHTML = score
        }
    }

    if(ballCurrentPosition[0] >= (boardWidth - ballDiameter) || 
    ballCurrentPosition[1] >= (boardHeight - ballDiameter)) {
    ballCurrentPosition[0] <= 0  
        changeDirection()
    } 

    if (
        (ballCurrentPosition[0] > currentPosition[0] && ballCurrentPosition[0] < currentPosition[0] + containerWidth) &&
        (ballCurrentPosition[1] > currentPosition[1] && ballCurrentPosition[1] < currentPosition[1] + containerHeight)
    ) { changeDirection() }

    if(ballCurrentPosition[1] <= 0) {
        clearInterval(timerID)
        scoreDisplay.innerHTML = 'Przegrana'
        document.removeEventListener('keydown', MoveUser)
    }

    }

function changeDirection()
{
    if (xDirection === 2 && yDirection == 2)
    {
        yDirection = -2
        return
    }

    if(xDirection == 2 && yDirection == -2)
    {
        xDirection = -2
        return
    }

    if(xDirection == -2 && yDirection == -2)
    {
        yDirection = 2
        return
    }

    
    if(xDirection == -2 && yDirection == 2)
    {
        xDirection = -2
        return
    }

}