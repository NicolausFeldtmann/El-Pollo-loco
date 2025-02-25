class Char extends MovableObject {
    
    IMAGE_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png',
    ];
    
    width = 150;
    height = 280;
    y = 180;
    currentImage = 0;
    world;
    speed = 10;

    constructor() {
        super().loadImg('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGE_WALKING);
        this.animate();
    }

    animate() {
        
        setInterval(() => {
            if(this.world.keyboard.RIGHT) {
                this.x += this.speed;
                this.otherDirection = false;
            }
        }, 30)

        setInterval(() => {
            if(this.world.keyboard.LEFT) {
                this.x -= this.speed;
                this.otherDirection = true;
            }
            this.world.camera_x = -this.x + 100;
        }, 30)

        setInterval(() => {
            if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                let i = this.currentImage % this.IMAGE_WALKING.length;
                let path = this.IMAGE_WALKING[i];
                this.img = this.imgCache[path];
                this.currentImage++;
            }
        }, 40);
    }

    moveRight() {
        setInterval(() => {
            this.x += 0.6;
        }, 1000 / 60);
    }

    jump() {}
}