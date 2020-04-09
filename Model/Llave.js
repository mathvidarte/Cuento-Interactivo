let imagenLlave;

class Llave extends Elemento {
    constructor(posX, posY) {
        super(posX, posY);
        this.imagenLlave = loadImage('images/llave.png');
    }

    drawElemento() {
        image(this.imagenLlave, this.posX, this.posY, 72, 36);
    }

    move() {

    }
}