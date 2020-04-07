class Alicia extends Elemento {
    constructor (posX, posY) {
        super(posX, posY);
        vel = 4;
    }

    draw () {
        rect (350, 300, 50, 100);
    }

    move () {
        posX -= vel;
    }
}