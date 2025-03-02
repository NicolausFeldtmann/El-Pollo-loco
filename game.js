let canvas;
let world;
let keyboard = new Keyboard(); 

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    backGrnMusic = new Audio('audio/music.mp3');
    //playAudio();
}

function playAudio() {
    setTimeout(() => {
        backGrnMusic.play();
    }, 500)
}

window.addEventListener('keydown', (e) => {
    if(e.keyCode == 65) {
        keyboard.LEFT = true;
    }
    if(e.keyCode == 68) {
        keyboard.RIGHT = true;
    }
    if(e.keyCode == 87) {
        keyboard.UP = true;
    }
    if(e.keyCode == 83) {
        keyboard.DOWN = true;
    }
    if(e.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if(e.keyCode == 69) {
        keyboard.THROW;
    }
        
})

window.addEventListener('keyup', (e) => {
    if(e.keyCode == 65) {
        keyboard.LEFT = false;
    }
    if(e.keyCode == 68) {
        keyboard.RIGHT = false;
    }
    if(e.keyCode == 87) {
        keyboard.UP = false;
    }
    if(e.keyCode == 83) {
        keyboard.DOWN = false;
    }
    if(e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if(e.keyCode == 81) {
        keyboard.THROW;
    }  
})