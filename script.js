

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;

function draw(ball) {
    ctx.fillStyle = ball.color;
    circle(ball.x, ball.y, 3, true);
}


var balls = [];
for (var i = 0; i < 20; i++) {

    balls.push(new Ball);

}


setInterval(function tick() {
    ctx.clearRect(0, 0, width, height);
    ctx.strokeRect(0, 0, width, height);

    for (var i = 0; i < 20; i++) {
        draw(balls[i]);
        balls[i].move();
        balls[i].checkCollision();


    }
}, 30);



