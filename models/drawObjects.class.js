class DrawObjects {
    x = 120;
    y = 300;
    height = 150;
    width = 100;
    img;
    imgCache = {};
    currentImage = 0;

    loadImg(path) {
        this.img = new Image();
        this.img.src = path;
    }
    
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if(this instanceof Char || this instanceof Chick || this instanceof Boss) {
        ctx.beginPath();
        ctx.lineWidth = '5';
        ctx.strokeStyle = 'blue';
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        }
    }

    drawHitBox() {
        if (this instanceof Char || this instanceof Bottle || this instanceof Chick || this instanceof Boss) {
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x + this.offset.left, this.y + this.offset.top, this.width - this.offset.right -this.offset.left, this.height - this.offset.top - this.offset.bottom);
            ctx.stroke();
        }
    }

    loadImages(arr) {
        arr.forEach(path => {
        let img = new Image();
        img.src = path;
        this.imgCache[path] = img;
        });
    }
}