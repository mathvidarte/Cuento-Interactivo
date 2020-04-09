let imagenPuerta;

class Puerta extends Elemento {
    constructor(posX, posY) {
        super(posX, posY);

        this.imagenPuerta = loadImage('images/puerta.png');

    }

    drawElemento() {
        image(this.imagenPuerta, this.posX, this.posY, 158, 140);
    }

    move() {

    }
}