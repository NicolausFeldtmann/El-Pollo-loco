class Char extends MovableObject {
    
    IMAGE_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png',
    ];

    IMAGE_JUMPING = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png',
    ];
    
    width = 150;
    height = 280;
    y = 10;
    currentImage = 0;
    world;
    speed = 10;

    constructor() {
        super().loadImg(this.IMAGE_WALKING[0]);
        this.loadImages(this.IMAGE_WALKING);
        this.loadImages(this.IMAGE_JUMPING);
        this.applyGravity();
        this.animate();
    }

    animate() {
        
        setInterval(() => {
            if(this.world.keyboard.RIGHT && this.x < this.world.level.levelEnd ) {
                this.moveRight();
            }

            if(this.world.keyboard.LEFT && this.x > 100) {
                this.moveLeft();
            }
            this.world.camera_x = -this.x + 100;

            if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGE_WALKING);
            }

            if(this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
            }
        }, 40);

        setInterval(() => {
            if(this.isAboveGround()) {
                this.playAnimation(this.IMAGE_JUMPING);
            } else {
                if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT);
            }
        }, 1000 / 15)
    }
}