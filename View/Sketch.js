

function setup () {
createCanvas (640, 480);

controller = new Controller(this);
}

function draw () {
    background (30,230,120);
    ellipse(20,20,20,20);

}

function moussePressed () {
        controller.sortList(key);
        
}