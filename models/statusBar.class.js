class StatusBar extends DrawObjects {

    IMAGES_HEALTH = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
    ];

    prencentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES_HEALTH);
        this.x = 100;
        this.y = 100;
        this.prencentage(100);
    }

    setPrecentage(prencentage) {
        this.prencentage = prencentage;
        let path = this.IMAGES_HEALTH[this.resolveImgIdx()];
        this.img = this.imgCache[path];
    }

    resolveImgIdx() {
        if(this.prencentage == 100) {
            return 5;
        } else if (this.prencentage) {
            return 4;
        } else if (this.prencentage) {
            return 3;
        } else if (this.prencentage) {
            return 2;
        } else if (this.prencentage) {
            return 1;
        } else {
            return 0;
        }
    }
}