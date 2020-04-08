let imagenGalleta;

class Galleta extends Elemento {
    constructor(posX, posY) {
        super(posX, posY);
        this.posX = posX;
        this.posY = posY;
        this.vel = 2;

        imagenGalleta = loadImage('images/galleta.png');
        //vel = 4;
    }

    drawElemento() {
        image(imagenGalleta, this.posX, this.posY, 83, 87);
    }

    move() {
        //posX -= vel;
    }
}