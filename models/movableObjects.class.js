class MovableObject {
    x = 120;
    y = 300;
    img;
    height = 150;
    width = 100;
    imgCache = {};

    loadImg(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach(path => {
        let img = new Image();
        img.src = path;
        this.imgCache[path] = img;
        });
    }

    moveRight() {
        console.log('move Right');
    }

    moveLeft() {
        console.log('move left');
    }
}