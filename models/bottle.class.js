class Bottle extends MovableObject {

    IMAGE_BOTTLE = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];
    
    constructor(x, y) {
        super().loadImg('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.IMAGE_BOTTLE);
        this.x = x;
        this.y = y;
        this.throw();
        this.spin();
    }

    spin() {
        setInterval(() => {
            this.playAnimation(this.IMAGE_BOTTLE);
        }, 75)
    }

    throw() {
        this.speedY = 20;
        this.applyGravity();
        setInterval(() => {
            this.x += 15;
        }, 25)
    }
}