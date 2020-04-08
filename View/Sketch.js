let fondoSketch;

function setup () {
createCanvas (640, 480);

controller = new Controller();
fondoSketch = new screenOne ();

}

function draw () {
    background (0);
    fondoSketch.drawScreen();

}

function mousePressed () {
  
		controller.sortList(key);
}