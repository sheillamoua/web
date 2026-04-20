const windowHeight = window.innerHeight
const windowWidth = window.innerWidth

const ball = document.createElement('div')
document.body.appendChild(ball)

const LPaddle = document.createElement('div')
document.body.appendChild(LPaddle)
let LPaddleWidth = 10
let LPaddleHeight = 100
let LPaddleSpeed = 5
let LPaddleYPosition = windowHeight / 2 - LPaddleHeight / 2
let LPaddleXPosition = 70

const RPaddle = document.createElement('div')
document.body.appendChild(RPaddle)
let RPaddleWidth = 10
let RPaddleHeight = 100
let RPaddleSpeed = 5
let RPaddleYPosition = windowHeight / 2 - RPaddleHeight / 2
let RPaddleXPosition = 70

const ballRadius = 30
let ballXPosition = windowWidth/2 - ballRadius
let ballSpeed = 5
let ballXDirection = 1
let ballYPosition = windowHeight/2 - ballRadius
let ballYDirection = 1

let score = 0

//setInterval(moveBall, 10)
function moveBall(){
    let ballTop = ballYPosition
    let ballBottom = ballYPosition + 2 * ballRadius
    let ballLeft = ballXPosition
    let ballRight = ballXPosition
    let LPaddleTop = LPaddleYPosition
    let LPaddleBottom = LPaddleYPosition + LPaddleHeight
    let LPaddleRight = LPaddleXPosition + LPaddleWidth
    let RPaddleTop = RPaddleYPosition
    let RPaddleBottom = RPaddleYPosition + RPaddleHeight
    let RPaddleLeft = RPaddleXPosition + RPaddleWidth

    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ballYPosition = ballYPosition + ballSpeed * ballYDirection
    ball.style.left = `${ballXPosition}px`
    ball.style.top = `${ballYPosition}px`
    if(ballYPosition < 0 || ballYPosition > windowHeight - 2 * ballRadius) {
        ballYDirection = ballYDirection * -1
    }
    if (ballXPosition < 0 || ballXPosition > windowWidth - 2 * ballRadius) {
        ballXDirection = ballXDirection * -1
    }
    if(
        (ballBottom >= LPaddleTop) &&
        (ballTop <= LPaddleBottom) &&
        (ballLeft <= LPaddleRight) &&
        (ballXDirection == -1)
    ) {
        ballXDirection = ballXDirection * -1
    }
    if(
        (ballBottom >= RPaddleTop) &&
        (ballTop <= RPaddleBottom) &&
        (ballRight <= RPaddleLeft) &&
        (ballYDirection == -1)
    ) {
        ballYDirection = ballYDirection * -1
    }
}

createBall()
function createBall(){
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "purple"
    ball.style.position = "absolute"
    ball.style.top = `${ballYPosition}px`
    ball.style.left = `${ballXPosition}px`
}
createLPaddle()
function createLPaddle(){
    LPaddle.style.height = `${LPaddleHeight}px`
    LPaddle.style.width = `${LPaddleWidth}px`
    LPaddle.style.background = 'blue'
    LPaddle.style.position = 'absolute'
    LPaddle.style.left = "50px"
    LPaddle.style.height = `${LPaddleYPosition}px`
}
createRPaddle()
function createRPaddle(){
    RPaddle.style.height = `${RPaddleHeight}px`
    RPaddle.style.width = `${RPaddleWidth}px`
    RPaddle.style.background = 'blue'
    RPaddle.style.position = 'absolute'
    RPaddle.style.right = "50px"
    RPaddle.style.height = `${RPaddleYPosition}px`
}

wKey= false
sKey= false

document.addEventListener('keydown', (event) => {
    if (event.key == 'w'){
        wKey = true
    }
    if(event.key == 's'){
        sKey = true
    }

})

document.addEventListener('keyup', (event) => {
    if(event.key == 'w') {
        wKey = false
    }
    if(event.key == 's') {
        sKey = false
    }
})

arrowupKey = false
arrowdownKey = false
document.addEventListener('keydown', (event) => {
    if(event.key == 'ArrowUp'){
        arrowupKey = true
    }
    if(event.key == 'ArrowDown'){
        arrowdownKey = true
    }
})
document.addEventListener('keyup', (event) => {
    if(event.key == 'ArrowUp') {
        arrowupKey = false
    }
    if(event.key == 'ArrowDown') {
        arrowdownKey = false
    }
})

function moveLPaddle() {
    if(wKey == true && LPaddleYPosition > 0){
        LPaddleYPosition = LPaddleYPosition - LPaddleSpeed
    }
    if(sKey == true && LPaddleYPosition < windowHeight-LPaddleHeight) {
        LPaddleYPosition = LPaddleYPosition + LPaddleSpeed
    }
     LPaddle.style.top = `${LPaddleYPosition}px`
}
function moveRPaddle() {
    if(arrowupKey == true && RPaddleYPosition > 0){
        RPaddleYPosition = RPaddleYPosition - RPaddleSpeed
    }
    if(arrowdownKey == true && RPaddleYPosition < windowHeight-RPaddleHeight) {
        RPaddleYPosition = RPaddleYPosition + RPaddleSpeed
    }
     RPaddle.style.top = `${RPaddleYPosition}px`
}

function animate() {
    moveBall()
    moveLPaddle()
    moveRPaddle()
    requestAnimationFrame(animate)
}
animate()
