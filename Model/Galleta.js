let imagenGalleta;

class Galleta extends Elemento {
    constructor (posX, posY) {
        super(posX, posY);
        this.posX = posX;
        this.posY = posY;

        imagenGalleta = loadImage('images/galleta.png');
        //vel = 4;
    }

    drawElemento () {
        image(imagenGalleta, this.posX, this.posY, 73, 77);
    }

    move () {
        //posX -= vel;
    }
}