let imagenGalleta;

class Galleta extends Elemento {
    constructor(posX, posY) {
        super(posX, posY);

        this.imagenGalleta = loadImage('images/galleta.png');
        
    }

    drawElemento() {
        image(this.imagenGalleta, this.posX, this.posY, 83, 87);
    }

    move() {
        
    }
}