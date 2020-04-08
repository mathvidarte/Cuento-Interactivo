let imagenAlicia;

class Alicia extends Elemento {
    constructor(posX, posY) {
        super(posX, posY);
        this.posX = posX;
        this.posY = posY;
        this.vel = 2;

        imagenAlicia = loadImage("images/Alicia.png");
    }

    drawElemento() {
        image(imagenAlicia, this.posX, this.posY, 297, 390);
    }

    move() {
    }
}