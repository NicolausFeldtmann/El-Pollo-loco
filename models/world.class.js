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
        new Background('img/5_background/layers/3_third_layer/2.png', 0, 720),
        new Background('img/5_background/layers/3_third_layer/1.png', 0, 1440),
        new Background('img/5_background/layers/3_third_layer/2.png', 0, 2160),
        new Background('img/5_background/layers/3_third_layer/1.png', 0, 2880),
        new Background('img/5_background/layers/3_third_layer/2.png', 0, 3600),
        new Background('img/5_background/layers/3_third_layer/1.png', 0, 4320),
        new Background('img/5_background/layers/3_third_layer/2.png', 0, 5040),
    ];
    backGrnObj = [
        new BackGrnObj('img/5_background/layers/2_second_layer/1.png', 0, 0),
        new BackGrnObj('img/5_background/layers/2_second_layer/2.png', 0, 720),
        new BackGrnObj('img/5_background/layers/2_second_layer/1.png', 0, 1440),
        new BackGrnObj('img/5_background/layers/2_second_layer/2.png', 0, 2160),
        new BackGrnObj('img/5_background/layers/2_second_layer/1.png', 0, 2880),
        new BackGrnObj('img/5_background/layers/2_second_layer/2.png', 0, 3600),
        new BackGrnObj('img/5_background/layers/2_second_layer/1.png', 0, 4320),
        new BackGrnObj('img/5_background/layers/2_second_layer/2.png', 0, 5040),

        new BackGrnObj('img/5_background/layers/1_first_layer/1.png', 0, 0),
        new BackGrnObj('img/5_background/layers/1_first_layer/2.png', 0, 720),
        new BackGrnObj('img/5_background/layers/1_first_layer/1.png', 0, 1440),
        new BackGrnObj('img/5_background/layers/1_first_layer/2.png', 0, 2160),
        new BackGrnObj('img/5_background/layers/1_first_layer/1.png', 0, 2880),
        new BackGrnObj('img/5_background/layers/1_first_layer/2.png', 0, 3600),
        new BackGrnObj('img/5_background/layers/1_first_layer/1.png', 0, 4320),
        new BackGrnObj('img/5_background/layers/1_first_layer/2.png', 0, 5040),
    ];
    sky = [
        new Sky('img/5_background/layers/air.png',0, 0),
        new Sky('img/5_background/layers/air.png',0, 719),
        new Sky('img/5_background/layers/air.png',0, 1437),
        new Sky('img/5_background/layers/air.png',0, 2156),
        new Sky('img/5_background/layers/air.png',0, 2875),
        new Sky('img/5_background/layers/air.png',0, 3594),
        new Sky('img/5_background/layers/air.png',0, 4313),
        new Sky('img/5_background/layers/air.png',0, 5032),
    ];
    canvas;
    ctx;
    keyboard;
    
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.char.world = this;
    }
        
        draw() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.translate(this.camera_x, 0);
            this.addObjToMap(this.sky);
            this.addObjToMap(this.background);
            this.addObjToMap(this.backGrnObj);
            this.addToMap(this.char);
            this.addObjToMap(this.enemies);
            this.addObjToMap(this.clouds);
            this.ctx.translate(-this.camera_x, 0);

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
            if(mo.otherDirection) {
                this.ctx.save();
                this.ctx.translate(mo.width, 0);
                this.ctx.scale(-1, 1);
                mo.x = mo.x * -1;
            }
            this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
            if(mo.otherDirection) {
                mo.x = mo.x * -1;
                this.ctx.restore();
            }
        }
    }