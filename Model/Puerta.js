let imagenPuerta;

class Puerta extends Elemento {
    constructor(posX, posY) {
        super(posX, posY);
        this.posX = posX;
        this.posY = posY;
        this.vel = 2;

        imagenPuerta = loadImage('images/puerta.png');

    }

    drawElemento() {
        image(imagenPuerta, this.posX, this.posY, 158, 140);
    }

    move() {

    }
}