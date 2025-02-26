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

    moveRight() {
        console.log('move Right');
    }

    moveLeft() {
        console.log('move left');
    }

    jump() {
        this.speedY = 18;
    }
}