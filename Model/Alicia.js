let imagenAlicia;
let imagenAliciaBrilla;


class Alicia extends Elemento {
    constructor(posX, posY) {
        super(posX, posY);
        this.imagenAlicia = loadImage("images/Alicia.png");
    }

    drawElemento() {
        image(this.imagenAlicia, this.posX, this.posY, 297, 390);
    }

    move() {
    }
}