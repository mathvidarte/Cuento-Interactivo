
let fondoSketch;

function setup() {
    createCanvas(900, 700);

    controller = new Controller();
    fondoSketch = new ScreenOne();
}

function draw() {
    background(0);
    fondoSketch.drawScreen();
    fondoSketch.moverScreen();

}

function mousePressed () {
    fondoSketch.changesScreen();
}

