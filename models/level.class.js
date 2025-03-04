class Level {
    enemies;
    clouds;
    background;
    backGrnObj;
    ammo;
    sky;
    levelEnd = 5040;

    constructor(enemies, clouds, background, backGrnObj, ammo, sky) {
        this.enemies = enemies;
        this. clouds = clouds;
        this.background = background;
        this.backGrnObj = backGrnObj;
        this.ammo = ammo;
        this.sky = sky;
    }
}