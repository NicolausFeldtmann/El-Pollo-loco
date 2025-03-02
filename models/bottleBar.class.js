class BolltleBar extends DrawObjects {

    IMAGES_BOTTLEBAR = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png',
    ];

    prencentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES_BOTTLEBAR);
        this.width = 200;
        this.height = 60;
        this.x = 50;
        this.y = 100;
        this.setPrencentage(100);
    }

    setPrencentage(prencentage) {
        this.prencentage = prencentage;
        let path = this.IMAGES_BOTTLEBAR[this.resolveImgIdx()];
        this.img = this.imgCache[path];
    }

    resolveImgIdx() {
        if (this.prencentage == 100) {
            return 5;
        } else if (this.prencentage > 80) {
            return 4;
        } else if (this.prencentage > 60) {
            return 3;
        } else if (this.prencentage > 40) {
            return 2;
        } else if (this.prencentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}