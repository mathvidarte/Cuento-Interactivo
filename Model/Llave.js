class Llave extends Elemento {
    constructor (posX, posY) {
        super(posX, posY);
        vel = 4;
    }

    draw () {
        rect (100, 100, 50, 50);
    }

    move () {
        posX -= vel;
    }
}