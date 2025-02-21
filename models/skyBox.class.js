class Sky extends MovableObject {

    y = 30;
    x = 50;
    width = 720;
    height = 480;

    constructor(path, y, x) {
        super().loadImg(path);
        this.y = y;
        this.x = x;
    }
}