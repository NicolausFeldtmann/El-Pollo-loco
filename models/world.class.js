class World {

    char = new Char();
    enemies = [
        new Chick('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png'),
        new Chick('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png'),
        new Chick('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png'),
    ];
    clouds = [
        new Clouds('img/5_background/layers/4_clouds/1.png'),
        new Clouds('img/5_background/layers/4_clouds/2.png'),
    ];
    background = [
        new Background('img/5_background/layers/3_third_layer/1.png', 0, 0),
    ];
    backGrnObj = [
        new BackGrnObj('img/5_background/layers/2_second_layer/1.png', 0, 0),
        new BackGrnObj('img/5_background/layers/1_first_layer/1.png', 0, 0),
    ];
    sky = [
        new Sky('img/5_background/layers/air.png',0, 0),
    ];
    canvas;
    ctx;
    
    
    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }
        
        draw() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.addObjToMap(this.sky);
            this.addObjToMap(this.background);
            this.addObjToMap(this.backGrnObj);
            this.addToMap(this.char);
            this.addObjToMap(this.enemies);
            this.addObjToMap(this.clouds);

            let self = this;
            requestAnimationFrame(function() {
                self.draw();
            });
        }

        addObjToMap(objects) {
            objects.forEach(obj => {
                this.addToMap(obj);              
            });
        }

        addToMap(mo) {
            this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        }
    }