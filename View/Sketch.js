
let fondoSketch;

function setup () {
createCanvas (900, 700);

controller = new Controller();
fondoSketch = new ScreenOne();
}

function draw () {
    background (200);
    fondoSketch.drawScreen();

}

function moussePressed () {
    controller.sortList(key);
        
}