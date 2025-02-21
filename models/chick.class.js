class Chick extends MovableObject {
    width = 70;
    height = 70;
    y = 380;
    
    constructor(imagePath, x) {
        super().loadImg(imagePath, x);
        this.x= 200 + Math.random() * 500;
        this.moveLeft();
    }

    moveLeft() {
        setInterval(() => {
            this.x -= 0.6;
        }, 1000 / 60);
    }
}