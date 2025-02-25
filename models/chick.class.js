class Chick extends MovableObject {
    
    
    constructor() {
        super().loadImg('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        
        this.x = 200 + Math.random() * 500;
        this.moveLeft();
        //this.animate();
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