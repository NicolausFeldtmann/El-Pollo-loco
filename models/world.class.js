class World {

    char = new Char();
    enemies = [
        
    ];
    canvas;
    ctx;
    
    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }
        
        draw() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.drawImage(this.char.img, this.char.x, this.char.y, this.char.width, this.char.height);
            this.enemies.forEach(enemy => {
                this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
            });
    
            let self = this;
            requestAnimationFrame(function() {
                self.draw();
            });
        }
    }