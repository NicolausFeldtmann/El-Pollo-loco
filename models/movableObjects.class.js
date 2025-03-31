class MovableObject extends DrawObjects {

    speed = 0.15;
    speedY = 0;
    accel = 1.5;
    energy = 100;
    ammo = 100;
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

    isAboveGround() {
        if (this instanceof Bottle) {
            return true;
        } else {
            return this.y < 180;
        }
    }
    
    playAnimation(iamges) {
        let i = this.currentImage % iamges.length;
        let path = iamges[i];
        this.img = this.imgCache[path];
        this.currentImage++;
    }

    isColliding(mo) {
        if (!mo || !mo.offset) {
            return false; 
        }
    
        return (
            this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
        );
    }

    gotHurt() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    pickUpAmmo() {
        this.ammo += 10;
        console.log('pick up ammo');
        this.lastPickUp = new Date().getTime();
    }

    gotAmmo() {
        let timePassed = new Date().getTime() - this.lastPickUp;
        timePassed = timePassed / 1000;
        return timePassed < 1;
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 1;
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