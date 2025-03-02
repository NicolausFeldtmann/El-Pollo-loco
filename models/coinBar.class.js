class CoinBar extends DrawObjects{

    IMAGES_COINBAR = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png',
    ];

    prencentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES_COINBAR);
        this.width = 200;
        this.height = 60;
        this.x = 50;
        this.y = 60;
        this.setPrecentage(100);
    }

    setPrecentage(prencentage) {
        this.prencentage = prencentage;
        let path = this.IMAGES_COINBAR[this.resolveImgIdx()];
        this.img = this.imgCache[path];
    }

    resolveImgIdx() {
        if(this.prencentage == 100) {
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