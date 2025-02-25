class Chick extends MovableObject {

    IMAGE_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];

    currentImage = 0

    constructor(imagePath, x) {
        super().loadImg(imagePath, x);
        this.loadImages(this.IMAGES_WALKING);

        this.x = 200 + Math.random() * 500;
        this.moveLeft();
        this.animate();
        this.otherDirection = true;
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_WALKING.length;
            let path = this.IMAGES_WALKING[i];
            this.img = this.imgCache[path];
            this.currentImage++;
        }, 80)
    }

    moveLeft() {
        setInterval(() => {
            this.x -= 0.6;
        }, 1000 / 60);
    }
}