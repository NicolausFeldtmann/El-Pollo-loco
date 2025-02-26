class Chick extends MovableObject {

    y = 350;
    width = 100;
    height = 100;

    IMAGE_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
        ];
    currentImage = 0;
    
    constructor() {
        super().loadImg('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGE_WALKING);
        
        this.x = 200 + Math.random() * 5040;
        this.moveLeft();
        this.animate();
    
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGE_WALKING);
        }, 1000 / 10)
    }

    moveLeft() {
        setInterval(() => {
            this.x -= 0.6;
        }, 1000 / 60);
    }
}