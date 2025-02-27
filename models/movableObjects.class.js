class MovableObject {
    x = 120;
    y = 300;
    img;
    height = 150;
    width = 100;
    imgCache = {};
    otherDirection = false;
    camera_x = 0;
    speed = 0.15;
    speedY = 0;
    accel = 1;
    energy = 100;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.accel;
            }
        }, 1000 / 25)
    }

    isAboveGround() {
        return this.y < 200;
    }

    loadImg(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach(path => {
        let img = new Image();
        img.src = path;
        this.imgCache[path] = img;
        });
    }

    playAnimation(iamges) {
            let i = this.currentImage % this.IMAGE_WALKING.length;
            let path = iamges[i];
            this.img = this.imgCache[path];
            this.currentImage++;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if(this instanceof Char || this instanceof Chick || this instanceof Boss) {
        ctx.beginPath();
        ctx.lineWidth = '5';
        ctx.strokeStyle = 'blue';
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        }
    }

    isColliding(mo) {
        return this.x + this.width > mo.x &&
        this.y + this.height > mo.y &&
        this.x < mo.x &&
        this.y < mo.y + mo.height;
    }

    gotHurt() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        }
    }

    isDead() {
        return this.energy == 0;
    }

    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }

    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = true;
    }

    jump() {
        this.speedY = 18;
    }
}