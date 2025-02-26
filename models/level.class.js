class Level {
    enemies;
    clouds;
    background;
    backGrnObj;
    sky;
    levelEnd = 5040;

    constructor(enemies, clouds, background, backGrnObj, sky) {
        this.enemies = enemies;
        this. clouds = clouds;
        this.background = background;
        this.backGrnObj = backGrnObj;
        this.sky = sky;
    }
}