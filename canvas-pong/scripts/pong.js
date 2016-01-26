// Use requestAnimationFrame for animations

var animate = window.requestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.mozRequestAnimationFrame ||
function(callback) { setTimeout(callback, 1000/60) };

var canvas = document.createElement('canvas');
var width = 400;
var height = 530;
canvas.width = width;
canvas.height = height;
var context = canvas.getContext('2d');

window.onload = function() {
    document.body.appendChild(canvas);
    animate(step);
};

var step = function() {
    update();
    render();
    animate(step);
};

var update = function() {
    player.update();
    computer.update(ball);
    ball.update(player.paddle, computer.paddle);
}

var render = function() {
    context.fillStyle = '#FF00FF';
    context.fillRect(0, 0, width, height);
    player.render();
    computer.render();
    ball.render();
}

var player = new Player();
var computer = new Computer();
var ball = new Ball(200, 300);

var keysDown = {};

window.addEventListener('keydown', function(event) {
    keysDown[event.keyCode] = true;
});

window.addEventListener('keyup', function(event) {
    delete keysDown[event.keyCode];
});
