var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 1;
var dy = -1;
var paddleHeight = 60;
var paddleWidth = 10;
var paddleX = (canvas.width-paddleWidth)/2;
var paddleY = canvas.height - 60;
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var objectHeight = 30;
var objectWidth = 30;
var objectX = (canvas.width-Math.random()*500)/2;
var objectY = 0;
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = true;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = false;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = false;
    }
}
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, paddleY, paddleHeight, paddleWidth);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawObject(){
    ctx.beginPath();
    ctx.rect(objectX, objectY, objectHeight, objectWidth);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    moveObject();
}

function moveObject() {
  objectY+=5;
  if (paddleY < 0){
      paddleY = 0;
}
}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPaddle();
    drawObject();
    if(rightPressed) {
        paddleX += 7;
        if (paddleX + paddleWidth > canvas.width){
            paddleX = canvas.width - paddleWidth;
        }
    }
    else if(leftPressed) {
        paddleX -= 7;
        if (paddleX < 0){
            paddleX = 0;
        }
    }
    else if(upPressed) {
        paddleY -= 7;
        if (paddleY < 0){
            paddleY = 0;
        }

    }
    else if(downPressed) {
        paddleY += 7;
        if (paddleY + paddleHeight > canvas.height){
            paddleY = canvas.height - paddleHeight;
        }
    }
    x += dx;
    y += dy;

}
setInterval(draw, 20);
