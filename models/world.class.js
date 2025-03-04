class World {

    char = new Char();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    status = new StatusBar();
    coinBar = new CoinBar();
    bottleBar = new BolltleBar();
    bottle = [];
    ouch = new Audio('audio/ouch.mp3');
    
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.checkCollision();
        this.checkPickUp();
        
    }

    setWorld() {
        this.char.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollision();
            this.checkThrow();
        }, 200)
    }

    checkThrow() {
        if (this.keyboard.THROW) {
            let bottle = new Bottle(this.char.x, this.char.y);
            this.bottle.push(bottle);
            console.log('OLEE!');
        }
    }

    checkCollision() {
            this.level.enemies.forEach((enemy) => {
                if(this.char.isColliding(enemy)) {
                    this.char.gotHurt();
                    this.status.setPrecentage(this.char.energy);
                    this.ouch.play();
                }
            });
    }

    checkPickUp() {
        this.level.ammo.forEach((ammo) => {
            if(this.char.isColliding(ammo)) {
                this.char.pickUpAmmo();
                this.status.setPrecentage(this.char.ammo);
                console.log('checkPickUp');
                
            }
        })
    }
        
        draw() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.translate(this.camera_x, 0);
            this.addObjToMap(this.level.sky);
            this.addObjToMap(this.level.background);
            this.addObjToMap(this.level.backGrnObj);
            this.addObjToMap(this.level.ammo);
            this.addToMap(this.char);
            this.addObjToMap(this.level.enemies);
            this.addObjToMap(this.level.clouds);
            this.addObjToMap(this.bottle);

            //Area for fixed on screen
            this.ctx.translate(-this.camera_x, 0);
            this.addToMap(this.status);
            this.addToMap(this.coinBar);
            this.addToMap(this.bottleBar);
            this.ctx.translate(this.camera_x, 0);

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