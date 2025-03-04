class AmmoBottle extends MovableObject {

    y = 100;
    x = 50;
    width = 100;
    height = 100;

    constructor(path, y, x) {
        super().loadImg(path);
        this.y = y;
        this.x = x;
    }
}