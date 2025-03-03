class Boss extends MovableObject {

    height = 500;
    width = 300;
    y = 0;

    IMAGE_WALKING = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png',
        ];
    currentImage = 0;
    
    constructor() {
        super().loadImg('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGE_WALKING);
        
        this.x = 5040;
        this.moveLeft();
        this.animate();
        this.otherDirection = false;
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGE_WALKING);
        }, 1000 / 10)
    }
}