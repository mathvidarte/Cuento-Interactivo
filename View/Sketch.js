function setup () {
createCanvas (640, 480);

controller = new Controller(this);
}

function draw () {
    background (0);

}

function mousePressed () {
  
		controller.sortList(key);
}