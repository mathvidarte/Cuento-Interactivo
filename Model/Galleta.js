class Galleta extends Elemento {
    constructor (posX, posY) {
        super(posX, posY);
        vel = 4;
    }

    draw () {
        rect (200, 300, 20, 20);
    }

    move () {
        posX -= vel;
    }
}