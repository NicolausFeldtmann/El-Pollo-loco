class Clouds extends MovableObject {
    y = 80;
    width = 350;
    height = 500;

    constructor(path) {
        super().loadImg(path);
        this.y = Math.random() * 30;
        this.x = Math.random() * 500;
        this.height = 50;
        this.moveCloud();
    }

    moveCloud() {
        setInterval( () =>{
            this.x -= 0.2;
        }, 1000 / 60);
    }
}