class Ball {
    static colors = ["Red", "Blue", "Purple", "Orange", "Green", "Brown", "IndianRed", "DarkCyan", "Gold", "RosyBrown"];

    static pickRandomColor = () => Ball.colors[Math.floor(Math.random() * Ball.colors.length)];

    constructor() {
        this.x = 100;
        this.y = 100;
        this.xSpeed = Math.floor(Math.random() * (-5));
        this.ySpeed = Math.floor(Math.random() * (5));
        this.color = Ball.pickRandomColor();
    }
    
    move() {
        
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }

    checkCollision() {
        
        if (this.x < 0 || this.x > width) {
            this.xSpeed = -this.xSpeed;
        }
        if (this.y < 0 || this.y > height) {
            this.ySpeed = -this.ySpeed;
        }

    }
}
