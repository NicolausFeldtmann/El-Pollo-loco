class World {

    char = new Char();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    status = new StatusBar();
    
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollision();
    }

    setWorld() {
        this.char.world = this;
    }

    checkCollision() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if(this.char.isColliding(enemy)) {
                    this.char.gotHurt();
                    console.log('AY YAY YAY!', this.char.energy);
                }
            });
        }, 200)
    }
        
        draw() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.translate(this.camera_x, 0);
            this.addObjToMap(this.level.sky);
            this.addObjToMap(this.level.background);
            this.addObjToMap(this.level.backGrnObj);
            this.addToMap(this.char);
            this.addObjToMap(this.level.enemies);
            this.addObjToMap(this.level.clouds);
            this.addToMap(this.status);
            this.ctx.translate(-this.camera_x, 0);

            let self = this;
            requestAnimationFrame(function() {
                self.draw();
            });
        }

        addObjToMap(objects) {
            objects.forEach(obj => {
                this.addToMap(obj);              
            });
        }

        addToMap(mo) {
            if(mo.otherDirection) {
                this.ctx.save();
                this.ctx.translate(mo.width, 0);
                this.ctx.scale(-1, 1);
                mo.x = mo.x * -1;
            }
            mo.draw(this.ctx);
            mo.drawFrame(this.ctx);
            
            if(mo.otherDirection) {
                mo.x = mo.x * -1;
                this.ctx.restore();
            }
        }
    }