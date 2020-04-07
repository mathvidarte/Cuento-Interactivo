function setup () {
createCanvas (640, 480);

controller = new Controller(this);
}

function draw () {
    background (0);
    ellipse(20,20,20,20);

}

function mousePressed () {
  
		controller.sortList(key);
}