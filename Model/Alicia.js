let imagenAlicia;
let imagenAliciaBrilla;
String = word;

class Alicia extends Elemento {
    constructor (word, posX, posY) {
        super(posX, posY);
        this.word = word;
        this.posX = posX;
        this.posY = posY;
        //vel = 4;

        imagenAlicia =loadImage ("images/Alicia.png");
        imagenAliciaBrilla = loadImage ("images/aliciaBrilla.png");
    }

    drawElemento () {
        image(imagenAlicia, this.posX, this.posY, 297, 390);
    }

    drawElementoBrilla () {
        image(imagenAliciaBrilla,this.posX, this.posY, 297, 390);
    }

    move () {
        posX -= vel;
    }
}