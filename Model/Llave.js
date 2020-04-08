let imagenLlave;

class Llave extends Elemento {
    constructor (posX, posY) {
        super(posX, posY);
        this.posX = posX;
        this.posY = posY;
        //vel = 4;

        imagenLlave = loadImage('images/llave.png');
    }

    drawElemento () {
        image(imagenLlave, this.posX, this.posY, 72, 36);
    }

    move () {
       // posX -= vel;
    }
}