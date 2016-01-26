// Player Class

function Player() {
    this.paddle = new Paddle(175, 500, 50, 10);
}

Player.prototype.render = function() {
    this.paddle.render();
};

Player.prototype.update = function() {
    for (var key in keysDown) {
        var value = Number(key);
        switch (value) {
            case 37:
                this.paddle.move(-4, 0);
                break;
            case 39:
                this.paddle.move(4, 0);
                break;
            default:
                this.paddle.move(0, 0);
                break;
        }

    }
};
