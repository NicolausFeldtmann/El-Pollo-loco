class Bottle extends MovableObject {

    IMAGE_BOTTLE = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];

    IMAGE_SPLASH = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ]

    speedY = 30;
    speedX = 20;
    offset = {
        top: 80,
        left: 100,
        right: 100,
        bottom: 40,
    };
    
    constructor(x, y) {
        super().loadImg('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.IMAGE_BOTTLE);
        this.loadImages(this.IMAGE_SPLASH);
        this.x = x;
        this.y = y;
        this.throw();
        this.spin();
    }

    spin() {
        this.spinInterval = setInterval(() => {
            this.playAnimation(this.IMAGE_BOTTLE);
        }, 75)
    }

    throw() {
        this.speedY = 15;
        this.applyGravity();
        this.fallIntervall = setInterval(() => {
            this.x += 10;
        }, 25)
    }

    impact() {
        this.speedY = 0;
        this.speedX = 0
        this.applyGravity = false;
        clearInterval(this.spinInterval);
        clearInterval(this.fallIntervall);
        this.impactAnimation();
     }

     impactAnimation() {
        setInterval(() => {
            this.playAnimation(this.IMAGE_SPLASH);
        })
     }
}