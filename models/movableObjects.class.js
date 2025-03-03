class MovableObject extends DrawObjects {

    speed = 0.15;
    speedY = 0;
    accel = 1;
    energy = 100;
    lastHit = 0;
    otherDirection = false;
    camera_x = 0;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.accel;
            }
        }, 1000 / 25)
    }
    
    playAnimation(iamges) {
        let i = this.currentImage % iamges.length;
        let path = iamges[i];
        this.img = this.imgCache[path];
        this.currentImage++;
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
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 1;
    }

    isDead() {
        return this.energy == 0;
    }

    isAboveGround() {
        return this.y < 200;
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